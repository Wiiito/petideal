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

	return (
		<div>
			<header className='w-full h-20 bg-reallyLight'>
				Org Dashboard
			</header>
			{/* Container que contem tudo 👍 */}
			<div className='w-full h-[calc(100vh-5rem)] flex'>
				<menu className='w-1/5 bg-darker'>
					<ul>
						<Link href='/org/dashboard/profile'>
							<li>Profile</li>
						</Link>
						<Link href='/org/dashboard/dogs'>
							<li>Dogs</li>
						</Link>
					</ul>
				</menu>
				<div className='w-full h-full overflow-y-scroll'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Page
