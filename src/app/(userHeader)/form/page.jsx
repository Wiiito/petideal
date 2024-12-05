'use client'

import { updateEmbedding } from '@/actions/user/update'
import Header from '@/components/header/header'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
	const { data: session, status } = useSession()

	useEffect(() => {
		if (status === 'unauthenticated') {
			redirect('/auth/user/register')
		}
	}, [status])

	const handleSubmit = async e => {
		e.preventDefault()
		const inputValues = Array.from(document.querySelectorAll('input')).map(
			input => {
				return input.value / 100
			}
		)
		const user = await updateEmbedding(session.user._id, inputValues)

		return false
	}

	return (
		<>
			<h2>Formulario</h2>
			<form method='post' onSubmit={handleSubmit}>
				Manutenção dos pelos:
				<input type='range' name='groomingAdaptability' />
				Quantidade de pelos soltos:
				<input type='range' name='sheddingAdaptability' />
				Adaptabilidade à energia:
				<input type='range' name='energyAdaptability' />
				Quer treinar o dog:
				<input type='range' name='trainabilityAdaptability' />
				Amigavel:
				<input type='range' name='demeanorAdaptability' />
				<button>Enviar</button>
			</form>
		</>
	)
}

export default Page
