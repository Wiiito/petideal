'use client'

import { signIn } from 'next-auth/react'

const Page = () => {
	const credentialsLogin = async () => {
		await signIn('credentials', {
			email: document.getElementsByName('email')[0].value,
			password: document.getElementsByName('password')[0].value,
			redirect: true,
			callbackUrl: '/',
		})
	}

	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				credentialsLogin()
			}}>
			<input type='email' name='email' placeholder='Email' required />
			<input type='password' name='password' placeholder='Password' required />
			<button type='submit'>Sign In</button>
		</form>
	)
}

export default Page
