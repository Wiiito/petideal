'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Page = () => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/auth/org/signin')
		},
	})

	if (status === 'authenticated' && !session.cnpj) {
		// Caso não seja uma org
		redirect('/profile')
	}

	return <div>Org dashboard</div>
}

export default Page
