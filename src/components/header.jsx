import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex justify-between md:py-3 md:px-16 lg:px-24 items-center lg:float-right'>
			<nav className='lg:absolute lg:transform lg:-translate-x-1/2 lg:left-1/2'>
				<ul className='list-none flex text-lg font-medium *:mr-6 *:relative *:after:content-[""] *:after:absolute *:after:w-0 *:after:h-1 *:after:rounded-full *:after:bg-reallyLight *:after:bottom-0 *:after:left-1/2 *:after:transform *:after:-translate-x-1/2 *:after:transition-all *:after:duration-300'>
					<Link href='/' className='hover:after:w-[120%]'>
						<li>Início</li>
					</Link>
					<Link href='/happyEnding' className='hover:after:w-[120%]'>
						<li>Finais Felizes</li>
					</Link>
					<Link href='/petideal' className='hover:after:w-[120%]'>
						<li className='relative flex items-center after:content-[""] after:absolute after:w-0 after:h-1 after:rounded-full after:bg-reallyLight after:bottom-0 after:left-1/2 hover:after:w-[120%] after:transform after:-translate-x-1/2 after:transition-all after:duration-300'>
							Petidel
							<svg
								width='10'
								height='5'
								viewBox='0 0 10 5'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='ml-3'>
								<path d='M5 5L0 0H10L5 5Z' fill='#1D1B20' />
							</svg>
						</li>
					</Link>
					<Link href='/faq' className='hover:after:w-[120%]'>
						<li>FAQ</li>
					</Link>
				</ul>
			</nav>
			<div className='flex items-center text-center font-medium'>
				<Link href='/auth/user/signin' className='mr-4'>
					<div className='w-32 h-9 content-center rounded-full border border-black opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'>
						Entrar
					</div>
				</Link>

				<Link href='/auth/user/register'>
					<div className='w-32 h-9 content-center rounded-full bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
						Registrar-se
					</div>
				</Link>
			</div>
		</header>
	)
}

export default Header
