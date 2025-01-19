'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { signOut } from 'next-auth/react'

const Page = () => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/auth/user/signin')
		},
	})

	useEffect(() => {}, [session])

	return (
		<div>
			<form>
				Nome:{' '}
				<input
					type='text'
					defaultValue={
						status === 'authenticated' ? session.user.name : 'Carregando'
					}
				/>
				Email:{' '}
				<input
					type='text'
					defaultValue={
						status === 'authenticated' ? session.user.email : 'Carregando'
					}
				/>
			</form>
			<button className='bg-error px-4 py-2 rounded-xl' onClick={signOut}>
				Sair
			</button>
		</div>
	)
}

export default Page
