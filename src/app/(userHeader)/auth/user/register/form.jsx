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
				<div className='fieldHeader'>
					<h4>Nome Completo</h4>
					{state?.name
						? Array.from(state.name).map((message, i) => {
								return <span key={i}>{message}</span>
						  })
						: ''}
				</div>
				<input
					type='text'
					name='name'
					className={state?.name ? 'incorrect' : ''}
				/>
			</div>
			<div className='field'>
				<div className='fieldHeader'>
					<h4>Email</h4>
					{state?.email
						? Array.from(state.email).map((message, i) => {
								return <span key={i}>{message}</span>
						  })
						: ''}
				</div>
				<input
					type='text'
					name='email'
					className={state?.email ? 'incorrect' : ''}
				/>
			</div>
			<div className='field'>
				<div className='fieldHeader'>
					<h4>Senha</h4>
					<div
						id='passwordHelperButton'
						className='relative opacity-75 ml-1 mt-[0.25rem] font-bold h-4 w-4 text-xs border-2 border-pastel text-pastel flex justify-center items-center rounded-full cursor-help'
					>
						?
						<div id='passwordHelper'>
							<span>Senha deve conter no minimo 8 caracteres</span>
							<span>Senha deve conter minúsculas</span>
							<span>Senha deve conter maiúsculas</span>
							<span>Senha deve conter números</span>
							<span>Senha deve conter caracteres especiais</span>
						</div>
					</div>
					{state?.password ? <span>{state.password[0]}</span> : ''}
				</div>
				<input
					type='password'
					name='password'
					className={state?.password ? 'incorrect' : ''}
				/>
			</div>
			<div className='field'>
				<div className='fieldHeader'>
					<h4>Confirmar Senha</h4>
					{state?.repeatPassword
						? Array.from(state.repeatPassword).map((message, i) => {
								return <span key={i}>{message}</span>
						  })
						: ''}
				</div>
				<input
					type='password'
					name='repeatPassword'
					className={state?.repeatPassword ? 'incorrect' : ''}
				/>
			</div>
			<button type='submit' className='bg-lightPastel text-trueWhite'>
				Registrar-se
			</button>
		</form>
	)
}

export default Form
