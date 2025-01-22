'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Page = () => {
	const credentialsLogin = async () => {
		await signIn('credentials', {
			email: document.getElementsByName('email')[0].value,
			password: document.getElementsByName('password')[0].value,
			type: 'org',
			redirect: true,
			callbackUrl: '/org/dashboard',
		})
	}

	return (
		<>
			<div className='subtitle'>
				<h4>Entrar</h4>
				<Link href='/auth/org/register'>Desejo criar uma conta</Link>
			</div>
			<div>
				<form
					onSubmit={(e) => {
						e.preventDefault()
						credentialsLogin()
					}}
					className='flex flex-col items-center'
				>
					<div className='line w-full max-w-96'>
						<div className='w-full'>
							<div className='text'>Email: </div>
							<input type='email' name='email' required className='w-full' />
						</div>
					</div>
					<div className='line w-full max-w-96'>
						<div className='w-full'>
							<div className='text'>Senha: </div>
							<input
								type='password'
								name='password'
								required
								className='w-full'
							/>
						</div>
					</div>
					<button className='submitButton' type='submit'>
						Entrar
					</button>
				</form>
			</div>
		</>
	)
}

export default Page
