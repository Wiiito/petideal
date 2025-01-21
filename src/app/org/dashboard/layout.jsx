'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const Page = ({ children }) => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/auth/org/signin')
		},
	})

	if (status === 'authenticated' && !session.user.cnpj) {
		// Caso não seja uma org
		redirect('/profile')
	}

	return <>{children}</>
}

export default Page
