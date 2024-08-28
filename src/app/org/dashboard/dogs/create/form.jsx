'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import submitDog from './action'
import { redirect } from 'next/navigation'

const Form = () => {
	const { data: session, status } = useSession()
	const [data, setData] = useState({
		name: '',
		orgId: '',
		images: [
			'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg',
		],
		characteristics: [1],
		observation: '',
		patronize: false,
		description: '',
		raceId: 'Caramelo',
	})

	useEffect(
		() =>
			setData((prev) => {
				return {
					...prev,
					orgId: status === 'authenticated' ? session.user.cnpj : '',
				}
			}),
		[session]
	)

	const handleSubmit = async () => {
		const res = await submitDog(data)

		if (res.success) {
			redirect('/org/dashboard/dogs')
		}

		return false
	}

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

	return (
		<form action={handleSubmit}>
			<label htmlFor=''>Name :</label>
			<input
				type='text'
				name='name'
				placeholder='Name'
				onChange={handleChange}
			/>{' '}
			<br />
			<input type='hidden' name='cnjp' value={data.orgId} readOnly />
			<label htmlFor='description'>Description: </label>
			<textarea
				name='description'
				id='description'
				placeholder='Description'
				onChange={handleChange}
			></textarea>
			<br />
			<label htmlFor='patronize'>Apadrinhavel?</label>
			<input
				type='checkbox'
				name='patronize'
				id='patronize'
				onChange={handleChange}
			/>{' '}
			<br />
			<label htmlFor='observation'>Observations:</label>
			<input
				type='text'
				name='observation'
				id='observation'
				onChange={handleChange}
			/>
			<br />
			<button type='submit'>Cadastrar</button>
		</form>
	)
}

export default Form
