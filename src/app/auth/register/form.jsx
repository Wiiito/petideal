'use client'

import { useFormState } from 'react-dom'
import handleSubmit from './action'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

const initialState = {
	name: '',
	email: '',
	repeatEmail: '',
	password: '',
	repeatPassword: '',
}

const Form = () => {
	const [state, formAction] = useFormState(handleSubmit, initialState)

	useEffect(() => {
		if (state.user) {
			signIn('credentials', {
				email: state.user.email,
				password: state.user.password,
				redirect: true,
				callbackUrl: '/',
			})
		}
	}, [state])

	return (
		<form action={formAction}>
			<div className='field'>
				<input type='text' placeholder='Nome' name='name' />
				<span>{state.name ? state.name[0] : ''}</span>
			</div>
			<div className='field'>
				<input type='text' placeholder='Email' name='email' />
				<span>{state.email ? state.email[0] : ''}</span>
			</div>
			<div className='field'>
				<input type='text' placeholder='Repita seu email' name='repeatEmail' />
				<span>{state.repeatEmail ? state.repeatEmail[0] : ''}</span>
			</div>
			<div className='field'>
				<input type='password' placeholder='Senha' name='password' />
				<span>{state.password ? state.password[0] : ''}</span>
			</div>
			<div className='field'>
				<input type='password' placeholder='Repita sua senha' name='repeatPassword' />
				<span>{state.repeatPassword ? state.repeatPassword[0] : ''}</span>
			</div>
			<button type='submit'>Register</button>
		</form>
	)
}

export default Form
