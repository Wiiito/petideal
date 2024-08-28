'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/auth/user/signin')
		},
	})

	useEffect(() => {
		console.log(session)
	}, [session])

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
		</div>
	)
}

export default Page
