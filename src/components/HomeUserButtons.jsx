'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

const HomeUserButtons = () => {
	const { data: session, status } = useSession()
	return (
		<div className='flex items-center text-center font-medium'>
			{status === 'authenticated' && !session.user.cnpj ? (
				<Link href='/profile'>
					<div className='w-32 h-9 content-center rounded-full bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
						Meu Perfil
					</div>
				</Link>
			) : (
				<>
					<Link href='/auth/user/signin' className='mr-4'>
						<div className='w-32 h-9 content-center rounded-full font-semibold border border-black opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'>
							Logar
						</div>
					</Link>

					<Link href='/auth/user/register'>
						<div className='w-32 h-9 content-center rounded-full font-semibold bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
							Registrar-se
						</div>
					</Link>
				</>
			)}
		</div>
	)
}

export default HomeUserButtons
