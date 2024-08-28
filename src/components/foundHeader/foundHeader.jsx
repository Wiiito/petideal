'use client'

import Link from 'next/link'
import { useRef } from 'react'

import './styles.scss'

const FoundHeader = () => {
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
			</div>
			<header className='py-3 px-7 flex justify-between md:py-3 md:px-16 lg:px-24 items-center lg:float-right'>
				
				<nav className="reallyLight hidden md:block lg:absolute lg:translate-x-5 lg:translate-y-5 lg:rigth-0">
					<div className="flex items-center">
						<Link href='/user/profile' className='mr-4'>
							<div className='w-14 h-14 content-center rounded-full border-2 border-black opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'>
								<img className='lg:translate-x-1 lg:-translate-y-0.5'
									src='/icons/profile.svg'
									height={42}
									width={42}
									alt='profileIcon'
								/>
							</div>
						</Link>
					</div>
				</nav>
			</header>
		</>
	)
}

export default FoundHeader
