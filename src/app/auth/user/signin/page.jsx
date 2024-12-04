'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Page = () => {
	const [error, setError] = useState(false)
	const router = useRouter()

	const credentialsLogin = () => {
		signIn('credentials', {
			email: document.getElementsByName('email')[0].value,
			password: document.getElementsByName('password')[0].value,
			type: 'user',
			redirect: false,
		}).then(({ ok }) => {
			if (ok) {
				router.push('/')
				return
			}
			setError(true)
		})
		return false
	}

	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault()
				credentialsLogin()
			}}
			action=''
		>
			<input
				type='email'
				name='email'
				placeholder='Email'
				className={error ? 'incorrect' : ''}
			/>
			{error ? <span>Credenciais invalidas</span> : ''}
			<input
				type='password'
				name='password'
				placeholder='Senha'
				className={error ? 'incorrect' : ''}
			/>
			{error ? <span>Credenciais invalidas</span> : ''}
			<button type='submit'>Entrar</button>
		</form>
	)
}

export default Page
