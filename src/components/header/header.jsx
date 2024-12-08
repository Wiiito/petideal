'use client'

import Link from 'next/link'
import { useRef } from 'react'

import './styles.scss'

const Header = () => {
	const menuOverlay = useRef(null)
	const hambMenu = useRef(null)

	function hambClick() {
		menuOverlay.current.classList.toggle('-left-[100vw]')
		menuOverlay.current.classList.toggle('left-0')
		hambMenu.current.classList.toggle('hamburguerMenu')
	}

	return (
		<>
			<div
				className='fixed h-screen w-screen bg-gradient-to-br from-white to-reallyLight z-40 -left-[100vw] transition-all ease-in-out duration-300'
				ref={menuOverlay}
			>
				<menu className='py-16 px-7 h-full'>
					<ul className='*:text-2xl *:mb-6 *:font-medium *:uppercase h-full flex flex-col justify-around'>
						<li>
							<Link href='/'>Início</Link>
						</li>

						<li>
							<Link href='/'>Finais Felizes</Link>
						</li>

						<li>
							<Link href='/'>Petideal</Link>
						</li>

						<li>
							<Link href='/'>FAQ</Link>
						</li>
					</ul>
				</menu>
			</div>
			<header className='py-3 px-7 flex justify-between md:py-3 md:px-16 lg:px-24 items-center lg:float-right'>
				<nav className='hidden md:block lg:absolute lg:transform lg:-translate-x-1/2 lg:left-1/2'>
					<ul className='list-none flex text-lg font-medium *:mr-6 *:relative *:after:content-[""] *:after:absolute *:after:w-0 *:after:h-1 *:after:rounded-full *:after:bg-reallyLight *:after:bottom-0 *:after:left-1/2 *:after:transform *:after:-translate-x-1/2 *:after:transition-all *:after:duration-300'>
						<Link href='/' className='hover:after:w-[120%]'>
							<li>Início</li>
						</Link>
						<Link href='/' className='hover:after:w-[120%]'>
							<li>Finais Felizes</li>
						</Link>
						<Link href='/' className='hover:after:w-[120%]'>
							<li className='relative flex items-center after:content-[""] after:absolute after:w-0 after:h-1 after:rounded-full after:bg-reallyLight after:bottom-0 after:left-1/2 hover:after:w-[120%] after:transform after:-translate-x-1/2 after:transition-all after:duration-300'>
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
						</Link>
						<Link href='/' className='hover:after:w-[120%]'>
							<li>FAQ</li>
						</Link>
					</ul>
				</nav>
				<div
					className='relative flex flex-col justify-around *:w-full *:h-1 *:bg-primary *:rounded-full *:transition-all *:duration-300 *:ease-in-out w-8 h-8 md:hidden z-50 cursor-pointer'
					onClick={hambClick}
					ref={hambMenu}
				>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</header>
		</>
	)
}

export default Header
