'use client'

import { updateEmbedding } from '@/actions/user/update'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
	const { data: session, status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/auth/user/register')
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
		router.push('/animals')

		return false
	}

	return (
		<>
			<h2>Formulario</h2>
			<form method='post' onSubmit={handleSubmit}>
				Manutenção dos pelos:
				<input type='range' name='groomingAdaptability' />
				<br />
				Quantidade de pelos soltos:
				<input type='range' name='sheddingAdaptability' />
				<br />
				Tamanho da casa:
				<input type='range' name='energyAdaptability' />
				<br />
				Disponibilidade de tempo:
				<input type='range' name='trainabilityAdaptability' />
				<br />
				Amigavel:
				<input type='range' name='demeanorAdaptability' />
				<br />
				<button>Enviar</button>
			</form>
		</>
	)
}

export default Page
