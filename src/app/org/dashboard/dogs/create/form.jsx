'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import submitDog from './action'
import { redirect } from 'next/navigation'
import './customFormStyles.scss'
import { getAllRacesNames, getRaceBaseEmbedding } from '@/actions/race/get'
import Image from 'next/image'
import { getOrgFromId } from '@/actions/org/get'
import Link from 'next/link'

const Form = () => {
	const descriptionRef = useRef()
	const inputRaceSearchRef = useRef()

	const { data: session, status } = useSession()

	// Observations state
	const [observations, setObservations] = useState([])

	// Races loading
	const [races, setRaces] = useState(['Carregando...'])
	const [racesName, setRacesName] = useState(['Carregando...'])
	const [filterRaces, setFilterRaces] = useState(['Carregando...'])
	const [female, setFemale] = useState(true)
	const [address, setAddress] = useState({})
	const [org, setOrg] = useState({})

	const racesBoxRef = useRef(null)

	// All data state
	const [data, setData] = useState({
		name: '',
		orgId: '',
		images: [],
		embedding: [],
		observation: [''],
		patronize: false,
		description: '',
		raceId: '',
		age: '',
	})

	// Calls create dog action
	const handleSubmit = async () => {
		// Se não utilizar a api FormData, é impossivel mandar imagem para rota do background
		let formData = new FormData()
		formData.append('name', data.name)
		formData.append('orgId', data.orgId)
		formData.append('embedding', data.embedding)
		formData.append('patronize', data.patronize)
		formData.append('description', data.description)
		formData.append('raceId', data.raceId)
		formData.append('age', data.age)

		data.images.forEach((image) => {
			formData.append('images', image)
		})

		data.observation.forEach((obs) => {
			formData.append('observation', obs)
		})

		const res = await submitDog(formData)

		if (res.success) {
			redirect('/org/dashboard/dogs')
		}

		return false
	}

	// Updates data state
	const handleChange = (e) => {
		setData((prev) => {
			if (e.target.name === 'patronize') {
				return {
					...prev,
					[e.target.name]: e.target.checked,
				}
			}
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	// Set user id on form
	useEffect(() => {
		setData((prev) => {
			return {
				...prev,
				orgId: status === 'authenticated' ? session.user._id : '',
			}
		})

		const getOrg = async () => {
			let _org = await getOrgFromId(session.user._id)
			setOrg(_org)
		}

		if (status === 'authenticated') getOrg()
	}, [session, status])

	useEffect(() => {
		const getAddress = async () => {
			if (org.addressZipCode) {
				const res = await fetch(
					'https://brasilapi.com.br/api/cep/v1/' + org.addressZipCode
				)
				const _address = await res.json()
				setAddress(_address)
			}
		}
		getAddress()
	}, [org])

	useEffect(() => {
		fetchRaces()
	}, [])

	useEffect(() => {
		const getRaceEmbedding = async () => {
			const raceEmbedding = await getRaceBaseEmbedding(data.raceId)

			setData((prev) => {
				return {
					...prev,
					embedding: raceEmbedding.embedding,
				}
			})

			document.getElementsByName('embedding').forEach((elem, i) => {
				elem.value = raceEmbedding.embedding[i] * 100
			})
		}

		if (data.raceId) getRaceEmbedding()
	}, [data.raceId])

	const fetchRaces = async () => {
		const races = await getAllRacesNames()
		setRaces(races.races)
		const racesNames = Array.from(races.races).map((race) => {
			return race.name
		})
		setRacesName(racesNames)
		setFilterRaces(racesNames)
	}

	// Updates description size
	const handleDescriptionInput = () => {
		// 48px min height
		const size = Math.max(descriptionRef.current.scrollHeight, 80)
		descriptionRef.current.style.height = size + 'px'
	}

	// Handle Observation
	const handleObservation = () => {
		const observationFormValues = Array.from(
			document.getElementsByName('observation')
		).map((e) => {
			if (e.value) {
				return e.value
			}
		})
		setData((prev) => {
			return { ...prev, observation: observationFormValues }
		})
		setObservations(observationFormValues)
	}

	const handleImage = (e) => {
		setData((prev) => {
			return {
				...prev,
				images: [...data.images, ...e.target.files],
			}
		})
	}

	const formatNumber = (number) => {
		let newNum = '('
		if (number > 10) {
			newNum += number.substring(0, 2) + ') '
			newNum += number.substring(2, 6) + '-' + number.substring(6, 10)
		}

		return newNum
	}

	const handleEmbeddingChanging = () => {
		const ranges = document.getElementsByName('embedding')
		const embeddingValues = Array.from(ranges).map((e) => {
			return e.value
		})
		setData((prev) => {
			return {
				...prev,
				embedding: embeddingValues,
			}
		})
	}

	return (
		<>
			<Link href='/org/dashboard/dogs' className='absolute top-4 left-4 z-10'>
				<div>
					<Image
						src='/backArrow.svg'
						width={28.8}
						height={20}
						alt='BackArrow'
					/>
				</div>
			</Link>
			<form action={handleSubmit} className='w-full min-h-screen'>
				<div className='relative w-full'>
					<div className='relative'>
						<button
							type='submit'
							className='absolute top-4 right-4 bg-darker font-normal text-white py-2 px-8 rounded-md'
						>
							Cadastrar
						</button>
					</div>
					<div className='flex h-screen'>
						<div className='block w-1/5 min-w-80 h-full'>
							<div className='w-full h-[80vh] bg-ultraLight px-4 overflow-y-scroll customScrollBar'>
								<div className='px-4'>
									<div className='flex mt-16'>
										<input
											type='text'
											name='name'
											placeholder='Nome do animal'
											onChange={handleChange}
											className='bg-transparent text-primary placeholder:text-primary font-bold placeholder:font-bold text-xl xl:text-2xl w-full outline-none border-b-2 border-transparent focus:border-primary px-2'
											id='name'
										/>
										<label htmlFor='name' className='cursor-pointer'>
											<div className='relative w-8 h-8'>
												<Image src='/icons/pencil.svg' fill alt='Pencil' />
											</div>
										</label>
									</div>
									<div className='mt-4'>
										{data.images[0] && (
											<div className='dogsImagesSlider'>
												<div id='slider'>
													{data.images.map((img, i) => {
														return (
															<div className='dogImageContainer' key={i}>
																<Image
																	src={URL.createObjectURL(img)}
																	alt={img.name}
																	style={{ objectFit: 'cover' }}
																	fill
																/>
															</div>
														)
													})}
												</div>
											</div>
										)}
										<input
											type='file'
											name='images'
											id='addImage'
											multiple
											className='hidden'
											accept='image/*'
											onChange={handleImage}
										/>
									</div>
									<label htmlFor='addImage' className='cursor-pointer'>
										<div className='w-full min-h-20 flex justify-center items-center outline-dotted outline-darker rounded-xl mb-4'>
											Adicionar Imagem
										</div>
									</label>
								</div>
							</div>
							<div className='w-full h-[20vh] bg-ultraLight overflow-y-scroll customScrollBar px-4'>
								<div className='text-gray text-lg font-bold'>
									Informações da organização:
								</div>
								<div className='text-brown font-semibold'>
									<div>
										Email:{' '}
										<span className='font-medium'>
											{org.email ? org.email : 'Carregando ...'}
										</span>
									</div>
									<div>
										Telefone:{' '}
										<div className='ml-2 font-medium'>
											{org.contactNumbers
												? org.contactNumbers.map((number) => {
														return formatNumber(number)
												  })
												: 'Carregando ...'}
										</div>
									</div>
									<div className='mt-2 w-full text-brown font-semibold flex items-center'>
										<div className='relative h-6 w-6'>
											<Image src='/icons/location.svg' fill alt='location' />
										</div>
										<span className='text-sm ml-1 w-full'>
											{org.fantasyName ? org.fantasyName : 'Carregando ...'}
										</span>
									</div>
									<div className='w-full text-brown font-medium text-sm'>
										{org.address ? org.address : 'Carregando ...'} -{' '}
										{address.neighborhood
											? address.neighborhood
											: 'Carregando ...'}
										, {address.city ? address.city : 'Carregando ...'} -{' '}
										{address.state ? address.state : 'Carregando ...'},{' '}
										{address.cep ? address.cep : 'Carregando ...'}
									</div>
								</div>
							</div>
						</div>

						<input type='hidden' name='orgId' value={data.orgId} readOnly />

						<div className='w-full h-full'>
							<h3 className='text-center mt-24 text-primary uppercase text-2xl'>
								Registro de animal
							</h3>

							<div className='w-full h-[calc(100%-4rem-2rem-6rem)] flex'>
								<div className='max-w-[50%] w-full h-full mx-16 my-8 px-8 py-6 border-primary border-dashed border-2 rounded-2xl overflow-y-scroll customScrollBar'>
									<div className='relative w-full'>
										<div className='uppercase text-gray text-sm font-semibold mb-2'>
											Espécie
										</div>
										<div className='relative'>
											<input
												type='text'
												placeholder='Selecionar'
												className='outline-none relative w-full p-4 border-lightGray border pr-16'
												onFocus={() =>
													(racesBoxRef.current.style.display = 'block')
												}
												onBlur={() =>
													(racesBoxRef.current.style.display = 'none')
												}
												onChange={(e) =>
													setFilterRaces(
														racesName.filter((race) => {
															if (
																race
																	.toLowerCase()
																	.includes(e.target.value.toLowerCase())
															)
																return true
														})
													)
												}
												ref={inputRaceSearchRef}
											/>
											<div className='absolute right-6 top-1/2 transform h-3 w-3 -translate-y-2/3 border-b-2 border-r-2 border-alternative rotate-45'></div>
										</div>
										<div
											className='hidden absolute w-full max-h-52 overflow-y-scroll p-2 bg-trueWhite border-darker border overflow-x-hidden z-10'
											ref={racesBoxRef}
										>
											{filterRaces.map((race, i) => {
												return (
													<div
														className='w-full h-8 border-b border-primary items-center flex hover:bg-semiWhite cursor-pointer'
														key={i}
														onMouseDown={async () => {
															const selectedRace = races.filter((allRaces) => {
																if (allRaces.name === race) return true
															})[0]
															inputRaceSearchRef.current.value = race

															setData((prev) => {
																return {
																	...prev,
																	raceId: selectedRace._id,
																}
															})
														}}
													>
														{race}
													</div>
												)
											})}
										</div>
									</div>
									<div className='w-full mt-4'>
										<div className='uppercase text-gray text-sm font-semibold mb-2'>
											Idade:{' '}
										</div>
										<input
											type='text'
											name='age'
											id='age'
											placeholder='Idade'
											onChange={handleChange}
											className='outline-none relative w-full p-4 border-lightGray border'
										/>
									</div>
									<div className='relative w-full mt-4'>
										<div className='uppercase text-gray text-sm font-semibold mb-2'>
											Sexo:
										</div>
										<input
											type='checkbox'
											id='sexFocus'
											className='peer w-0 h-0 absolute'
										/>
										<label htmlFor='sexFocus'>
											<div
												onClick={() => {}}
												className='relative w-full p-4 border-lightGray border pr-16'
											>
												{female ? 'Femêa' : 'Macho'}

												<div className='absolute right-6 top-1/2 transform h-3 w-3 -translate-y-2/3 border-b-2 border-r-2 border-alternative rotate-45'></div>
											</div>
										</label>
										<div
											className='peer-checked:flex hidden absolute w-full p-4 border-lightGray border pr-16 bg-trueWhite hover:bg-semiWhite cursor-pointer'
											onClick={() => {
												setFemale(!female)
												document.getElementById('sexFocus').checked = false
											}}
										>
											{!female ? 'Femêa' : 'Macho'}
										</div>
									</div>
									<div className='w-full mt-4'>
										<div className='uppercase text-gray text-sm font-semibold mb-2'>
											Sobre o animal:
										</div>
										<textarea
											name='description'
											id='description'
											placeholder='Descrição do animal'
											onChange={handleChange}
											onInput={handleDescriptionInput}
											className='w-full resize-none focus:outline-none p-4 border border-lightGray rounded-md h-20 focus:outline-alternative customScrollBar'
											ref={descriptionRef}
										></textarea>
									</div>
									<div className='flex justify-between mt-2'>
										<div className='flex items-center mt-2'>
											<label
												htmlFor='patronize'
												className='uppercase text-gray text-sm font-semibold mr-2'
											>
												Apadrinhavel:
											</label>
											<input
												type='checkbox'
												name='patronize'
												id='patronize'
												onChange={handleChange}
												className='customCheckbox'
											/>
											<div className='relative'>
												<span className='relative opacity-75 ml-2 font-bold h-5 w-5 text-sm border-2 border-black flex justify-center items-center rounded-full cursor-help peer'>
													?
												</span>
												<div className='peer-hover:block hidden absolute bottom-5 left-5 border border-black bg-trueWhite px-4 py-2'>
													Permitir que o animal passe tempo com quem tem
													interesse de adota-lo
												</div>
											</div>
										</div>
									</div>
									<h4 className='uppercase text-gray text-sm font-semibold mr-2 mt-4 border-t border-primary pt-4'>
										Observações:{' '}
									</h4>
									<div className='mt-2'>
										{observations.map((elem, i) => {
											return (
												<input
													type='text'
													name='observation'
													placeholder='Observação'
													onChange={handleObservation}
													key={i}
													className='relative w-full p-4 border-lightGray border pr-16 outline-none mb-4'
												/>
											)
										})}
										<button
											type='button'
											onClick={() => {
												if (
													observations[observations.length - 1] ||
													observations.length === 0
												) {
													setObservations([...observations, ''])
												}
											}}
											className='bg-darker font-normal text-white py-2 w-full rounded-md'
										>
											Adicionar observação <span className='text-xl'>+</span>
										</button>
									</div>
								</div>
								<div className='max-w-[50%] w-full h-full mx-16 my-8 px-8 py-6 border-primary border-dashed border-2 rounded-2xl overflow-y-scroll customScrollBar'>
									<div className='question'>
										<div className='text'>
											O animal é carinhoso com pessoas próximas?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal convive bem com crianças pequenas?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal interage bem com outros cães?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>O animal perde muito pelo?</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal precisa cuidado frequente com pelos?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>O animal baba com frequência?</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											Qual a frequência ideal de cuidados com a pelagem?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											A pelagem é curta, média ou longa?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal é receptivo a pessoas desconhecidas?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>O animal é brincalhão?</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal demonstra comportamento protetor?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal se adapta bem a novos ambientes ou mudanças?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal responde bem a treinamentos?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal é mais ativo ou tranquilo?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal late/mia com frequência?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
									<div className='question'>
										<div className='text'>
											O animal precisa de atividades para evitar tédio?
										</div>
										<div className='answers'>
											<input
												type='range'
												onChange={handleEmbeddingChanging}
												name='embedding'
												id=''
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

export default Form
