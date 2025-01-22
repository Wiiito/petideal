'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { getAllPagesOfAOrg } from '@/actions/pet/get'
import { getOrgFromId } from '@/actions/org/get'
import Image from 'next/image'
import OrgDogComponent from '@/components/OrgDogComponent'
import updateOrganization from './action'

const Page = () => {
	const { data: session, status } = useSession()

	const [dogs, setDogs] = useState({})
	const [org, setOrg] = useState({})
	const [changed, setChanged] = useState(false)
	const [numbers, setNumbers] = useState([''])

	useEffect(() => {
		const requestDogs = async () => {
			setDogs(await getAllPagesOfAOrg(session.user._id))
		}

		const requestOrgInfo = async () => {
			setOrg(await getOrgFromId(session.user._id))
		}

		if (status === 'authenticated') {
			requestDogs()
			requestOrgInfo()
		}
	}, [status, session])

	useEffect(() => {
		setNumbers(org.contactNumbers)
	}, [org])

	const numbersChange = () => {
		const numbers = Array.from(document.getElementsByName('number')).map(
			(e) => e.value
		)
		const validNumbers = []
		numbers.forEach((e) => {
			if (e !== '') validNumbers.push(e)
		})
		setNumbers(validNumbers)
	}

	const handleSubmit = (e) => {
		const form = document.getElementById('changedValues')
		const formData = new FormData(form)

		updateOrganization(session.user._id, formData)
		setChanged(false)

		return false
	}

	return (
		<>
			<Link href='/org' className='absolute top-8 left-8 z-10'>
				<div>
					<Image
						src='/backArrow.svg'
						width={28.8}
						height={20}
						alt='BackArrow'
						sizes='10vw'
					/>
				</div>
			</Link>
			<div className='flex px-20 py-16 w-full items-center'>
				<form
					action={handleSubmit}
					className='w-full relative'
					id='changedValues'
				>
					<div className='flex items-center pr-56'>
						<h2 className='text-5xl text-primary font-bold w-full'>
							<input
								type='text'
								defaultValue={org.fantasyName}
								onChange={() => {
									setChanged(true)
								}}
								className='w-full outline-none border-b-2 border-transparent focus:border-primary px-2'
								id='fantasyName'
								name='fantasyName'
							/>
						</h2>
						<label
							htmlFor='fantasyName'
							className='w-12 h-12 relative cursor-pointer'
						>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='flex mt-2 ml-4'>
						<span className='w-20'>CNPJ:</span>
						<input
							type='text'
							defaultValue={org.cnpj}
							onChange={() => {
								setChanged(true)
							}}
							className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
							id='cnpj'
							name='cnpj'
							maxLength={14}
						/>
						<label htmlFor='cnpj' className='w-6 h-6 relative cursor-pointer'>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='flex mt-2 ml-4'>
						<span className='w-20'>CEP:</span>
						<input
							type='text'
							defaultValue={org.addressZipCode}
							onChange={() => {
								setChanged(true)
							}}
							className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
							id='cep'
							name='cep'
							maxLength={8}
						/>
						<label htmlFor='cep' className='w-6 h-6 relative cursor-pointer'>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='flex mt-2 ml-4'>
						<span className='w-20'>Logadouro:</span>
						<input
							type='text'
							defaultValue={org.address}
							onChange={() => {
								setChanged(true)
							}}
							className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
							id='address'
							name='address'
							maxLength={8}
						/>
						<label
							htmlFor='address'
							className='w-6 h-6 relative cursor-pointer'
						>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='flex mt-2 ml-4'>
						<span className='w-20'>Email:</span>
						<input
							type='text'
							defaultValue={org.email}
							onChange={() => {
								setChanged(true)
							}}
							className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
							id='email'
							name='email'
							maxLength={8}
						/>
						<label htmlFor='email' className='w-6 h-6 relative cursor-pointer'>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='flex mt-2 ml-4'>
						<span className='w-20'>Senha:</span>
						<input
							type='text'
							placeholder='**********'
							onChange={() => {
								setChanged(true)
							}}
							className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
							id='password'
							name='password'
						/>
						<label
							htmlFor='password'
							className='w-6 h-6 relative cursor-pointer'
						>
							<Image src='/icons/pencil.svg' fill alt='Pencil' />
						</label>
					</div>
					<div className='block mt-2 ml-4'>
						{numbers
							? numbers.map((number, i) => {
									return (
										<div className='flex' key={i}>
											<span className='w-20'>Número:</span>
											<input
												type='text'
												defaultValue={number}
												onChange={() => {
													setChanged(true)
													numbersChange()
												}}
												name='number'
												className='outline-none w-96 focus:border-black border-transparent border-b px-2 mx-2'
												id={'number' + i}
											/>
											<label
												htmlFor={'number' + i}
												className='w-6 h-6 relative cursor-pointer'
											>
												<Image src='/icons/pencil.svg' fill alt='Pencil' />
											</label>
										</div>
									)
							  })
							: ''}
						<button
							className='w-[30.5rem] text-2xl border border-black rounded-full mt-2'
							onClick={() => {
								if (numbers[numbers.length - 1] !== '') {
									setNumbers((prev) => [...prev, ''])
								}
							}}
						>
							+
						</button>
					</div>
					<div className='absolute right-0 top-0 flex flex-col gap-2'>
						{changed ? (
							<button
								type='submit'
								className='bg-lightPastel font-semibold text-white py-2 px-4 rounded-full w-48'
							>
								Salvar Alterações
							</button>
						) : (
							''
						)}
						<button
							type='button'
							className='top-12 bg-lightPastel font-semibold text-white py-2 px-8 rounded-full w-48'
							onClick={() => signOut()}
						>
							Sair
						</button>
					</div>
				</form>
			</div>
			<div className='w-full p-6 pt-0'>
				<h3 className='w-full text-primary font-semibold text-xl uppercase mb-2'>
					Animais:{' '}
				</h3>
				<div className='flex flex-wrap gap-4 justify-around'>
					<Link href='/org/dashboard/dogs/create'>
						<div className='w-36 h-48 border-dashed border-darker border-2 rounded-xl flex justify-center items-center'>
							<div className='bg-primary text-white px-2 py-2 text-center rounded-lg uppercase font-light text-sm'>
								Novo Animal
							</div>
						</div>
					</Link>
					{Array.from(dogs).map((dog, index) => {
						return (
							<Link href={'/org/dashboard/dogs/' + dog._id} key={index}>
								<OrgDogComponent dog={dog} />
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Page
