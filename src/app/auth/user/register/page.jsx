'use client'

import { useFormState } from 'react-dom'
import handleSubmit from './action'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const initialState = {
	name: '',
	email: '',
	repeatEmail: '',
	password: '',
	repeatPassword: '',
}

const Form = () => {
	const [state, formAction] = useFormState(handleSubmit, initialState)
	const router = useRouter()

	useEffect(() => {
		if (state.user) {
			setTimeout(() => {
				signIn('credentials', {
					email: state.user.email,
					password: state.user.password,
					type: 'user',
					redirect: false,
				}).then(({ ok }) => {
					if (ok) {
						router.push('/')
					}
				})
			}, 1000)
		}
	}, [state])

	return (
		<form action={formAction}>
			<div className='field'>
				<input
					type='text'
					placeholder='Nome'
					name='name'
					className={state?.name ? 'incorrect' : ''}
				/>
				{state?.name
					? Array.from(state.name).map((message, i) => {
							return <span key={i}>{message}</span>
					  })
					: ''}
			</div>
			<div className='field'>
				<input
					type='text'
					placeholder='Email'
					name='email'
					className={state?.email ? 'incorrect' : ''}
				/>
				{state?.email
					? Array.from(state.email).map((message, i) => {
							return <span key={i}>{message}</span>
					  })
					: ''}
			</div>
			<div className='field'>
				<input
					type='text'
					placeholder='Repita seu email'
					name='repeatEmail'
					className={state?.repeatEmail ? 'incorrect' : ''}
				/>
				{state?.repeatEmail
					? Array.from(state.repeatEmail).map((message, i) => {
							return <span key={i}>{message}</span>
					  })
					: ''}
			</div>
			<div className='field'>
				<input
					type='password'
					placeholder='Senha'
					name='password'
					className={state?.password ? 'incorrect' : ''}
				/>
				{state?.password
					? Array.from(state.password).map((message, i) => {
							return <span key={i}>{message}</span>
					  })
					: ''}
			</div>
			<div className='field'>
				<input
					type='password'
					placeholder='Repita sua senha'
					name='repeatPassword'
					className={state?.repeatPassword ? 'incorrect' : ''}
				/>
				{state?.repeatPassword
					? Array.from(state.repeatPassword).map((message, i) => {
							return <span key={i}>{message}</span>
					  })
					: ''}
			</div>
			<button type='submit'>Register</button>
		</form>
	)
}

export default Form
