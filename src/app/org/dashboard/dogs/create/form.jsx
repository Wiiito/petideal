'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import submitDog from './action'
import { redirect } from 'next/navigation'
import './customFormStyles.scss'

const Form = () => {
	const descriptionRef = useRef()

	const { data: session, status } = useSession()

	// Observations state
	const [observations, setObservations] = useState([])

	// All data state
	const [data, setData] = useState({
		name: '',
		orgId: '',
		images: [],
		characteristics: [1],
		observation: [''],
		patronize: false,
		description: '',
		raceId: 'Caramelo',
	})

	// Calls create dog action
	const handleSubmit = async () => {
		// Se não utilizar a api FormData, é impossivel mandar imagem para rota do background
		let formData = new FormData()
		formData.append('name', data.name)
		formData.append('orgId', data.orgId)
		formData.append('characteristics', [1])
		formData.append('patronize', data.patronize)
		formData.append('description', data.description)
		formData.append('raceId', 'Caramelo')

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
	useEffect(
		() =>
			setData((prev) => {
				return {
					...prev,
					orgId: status === 'authenticated' ? session.user._id : '',
				}
			}),
		[session]
	)

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
		console.log(data)
	}

	const handleImage = (e) => {
		setData((prev) => {
			return {
				...prev,
				images: [...data.images, ...e.target.files],
			}
		})
	}

	return (
		<form action={handleSubmit} className='w-full mb-4'>
			<div className='w-[calc(100%-2rem)] p-4 rounded-xl shadow-inner shadow-black m-4'>
				<input
					type='text'
					name='name'
					placeholder='Nome'
					onChange={handleChange}
					className='w-full p-2 text-2xl border-b border-black focus:outline-none font-bold mb-4 placeholder:text-black placeholder:opacity-70'
				/>
				<input
					type='file'
					name='images'
					id='addImage'
					multiple
					className='hidden'
					accept='image/*'
					onChange={handleImage}
				/>
				{data.images[0] && (
					<div className='dogsImagesSlider mb-4'>
						<div
							id='slider'
							style={{
								width: 17 * data.images.length - 1 + 'rem',
							}}
						>
							{data.images.map((img, i) => {
								return (
									<div className='dogImageContainer' key={i}>
										<img src={URL.createObjectURL(img)} alt={img.name} />
									</div>
								)
							})}
						</div>
					</div>
				)}
				<label htmlFor='addImage' className='cursor-pointer'>
					<div className='w-full min-h-20 flex justify-center items-center outline-dotted outline-darker rounded-xl mb-4'>
						Adicionar Imagem
					</div>
				</label>
				<input type='hidden' name='orgId' value={data.orgId} readOnly />
				<textarea
					name='description'
					id='description'
					placeholder='Descrição do animal'
					onChange={handleChange}
					onInput={handleDescriptionInput}
					className='w-full resize-none focus:outline-none p-4 border border-black rounded-md h-20'
					ref={descriptionRef}
				></textarea>
				<div className='flex items-center mt-2'>
					<label htmlFor='patronize' className='text-xl font-semibold mr-2'>
						Apadrinhavel:{' '}
					</label>
					<input
						type='checkbox'
						name='patronize'
						id='patronize'
						onChange={handleChange}
						className='customCheckbox'
					/>
					<span className='opacity-75 ml-2 font-bold h-5 w-5 text-sm border-2 border-black flex justify-center items-center rounded-full cursor-help'>
						?
					</span>
				</div>
				<h4 className='mt-4 pt-2 border-t border-black w-full text-xl'>
					Observações:{' '}
				</h4>
				<div className='mt-2 px-4'>
					{observations.map((elem, i) => {
						return (
							<input
								type='text'
								name='observation'
								placeholder='Observação'
								onChange={handleObservation}
								key={i}
								className='w-full focus:outline-none border px-3 py-1 rounded-full mb-2'
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
						className='w-full px-3 py-1 rounded-full focus:outline-none bg-light text-white uppercase font-semibold text-base'
					>
						Adicionar observação <span className='text-xl'>+</span>
					</button>
				</div>
			</div>
			<button
				type='submit'
				className='mx-4 mt-2 w-[calc(100%-2rem)] bg-gradient-to-tr from-primary to-reallyLight text-2xl py-1 rounded-full font-bold text-white font-mono uppercase shadow-sm shadow-black'
			>
				Cadastrar
			</button>
		</form>
	)
}

export default Form
