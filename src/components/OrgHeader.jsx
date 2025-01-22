'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

const OrgHeader = () => {
	const { data: session, status } = useSession()
	return (
		<header className='absolute w-full justify-between min-h-16 items-center px-8 flex'>
			<div className='hidden lg:block'></div>
			<nav className=''>
				<ul className='list-none flex text-lg font-medium *:mr-6 *:relative *:after:content-[""] *:after:absolute *:after:w-0 *:after:h-1 *:after:rounded-full *:after:bg-reallyLight *:after:bottom-0 *:after:left-1/2 *:after:transform *:after:-translate-x-1/2 *:after:transition-all *:after:duration-300'>
					<Link href='/org' className='hover:after:w-[120%]'>
						<li>Início</li>
					</Link>

					<div className='relative cursor-pointer'>
						<li className='peer relative flex items-center after:content-[""] after:absolute after:w-0 after:h-1 after:rounded-full after:bg-reallyLight after:bottom-0 after:left-1/2 hover:after:w-[120%] after:transform after:-translate-x-1/2 after:transition-all after:duration-300'>
							Petideal
							<svg
								width='10'
								height='5'
								viewBox='0 0 10 5'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='ml-3'
							>
								<path d='M5 5L0 0H10L5 5Z' fill='#1D1B20' />
							</svg>
						</li>
						<ul className='hover:block peer-hover:block hidden absolute z-40 min-w-60 transform -translate-x-1/2 left-1/2 top-full bg-trueWhite text-center rounded-xl'>
							<Link href='/petideal'>
								<li className='px-4 py-2 shadow-sm text-lg'>
									O que é o petideal
								</li>
							</Link>
							<Link href='/equipe'>
								<li className='px-4 py-2 shadow-sm text-lg'>
									Conheça nossa equipe
								</li>
							</Link>
						</ul>
					</div>

					<Link href='/faq' className='hover:after:w-[120%]'>
						<li>FAQ</li>
					</Link>
				</ul>
			</nav>
			<div className=' hidden sm:flex items-center text-center font-medium'>
				{status === 'authenticated' && session.user.cnpj ? (
					<div className='w-32 h-9 content-center rounded-full bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
						<Link href='/org/dashboard/dogs'>Meu Perfil</Link>
					</div>
				) : (
					<>
						<Link href='/auth/org/signin' className='mr-4'>
							<div className='w-32 h-9 content-center rounded-full font-semibold border border-black opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'>
								Logar
							</div>
						</Link>

						<Link href='/auth/org/register'>
							<div className='w-32 h-9 content-center rounded-full font-semibold bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
								Registrar-se
							</div>
						</Link>
					</>
				)}
			</div>
		</header>
	)
}

export default OrgHeader
