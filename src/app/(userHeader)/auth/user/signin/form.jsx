'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Form = () => {
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
			<div className='field'>
				<div className='fieldHeader'>
					<h4>Email</h4>
					{error ? <span>Credenciais invalidas</span> : ''}
				</div>
				<input type='email' name='email' className={error ? 'incorrect' : ''} />
			</div>
			<div className='field'>
				<div className='fieldHeader'>
					<h4>Senha</h4>
					{error ? <span>Credenciais invalidas</span> : ''}
				</div>
				<input
					type='password'
					name='password'
					className={error ? 'incorrect' : ''}
				/>
			</div>
			<button
				type='submit'
				className='border-black border bg-trueWhite bg-opacity-50 backdrop-blur-xl'
			>
				Logar
			</button>
		</form>
	)
}

export default Form
