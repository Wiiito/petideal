'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useRef, useState } from 'react'
import submitDog from './action'
import { redirect } from 'next/navigation'
import './customCheckbox.scss'

const Form = () => {
	const descriptionRef = useRef()

	const { data: session, status } = useSession()

	// Observations state
	const [observations, setObservations] = useState([])

	// All data state
	const [data, setData] = useState({
		name: '',
		orgId: '',
		images: [
			'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg',
		],
		characteristics: [1],
		observation: [''],
		patronize: false,
		description: '',
		raceId: 'Caramelo',
	})

	// Calls create dog action
	const handleSubmit = async () => {
		const res = await submitDog(data)

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

	return (
		<form action={handleSubmit} className='w-full'>
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
					name=''
					id='addImage'
					multiple={true}
					className='hidden'
				/>
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
