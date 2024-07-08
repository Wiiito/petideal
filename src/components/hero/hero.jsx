import Image from 'next/image'

import './hero.scss'

const Hero = () => {
	return (
		<div className='relative overflow-hidden h-screen w-screen'>
			<div className='w-[49.5vw] mt-8 lg:ml-24 md:ml-16 ml-10'>
				<div className='lg:text-7xl lg:leading-[5.625rem] md:text-5xl md:leading-[4rem] text-4xl font-bold'>
					Descubra seu companheiro <span className='uppercase text-darker'>ideal</span> de quatro
					patas!
				</div>
				<div className='w-2/3 lg:text-lg md:text-base text-sm mt-9'>
					Adotar um animal é mais do que dar um lar; é oferecer amor incondicional e transformar
					vidas para sempre.
				</div>
				<button className='uppercase buttonGradient font-bold text-white mt-16 lg:w-80 lg:h-20 lg:text-3xl md:w-56 md:h-14 md:text-2xl rounded-full ml-[15%] hover:scale-105 transition-all ease-in-out'>
					Começar
				</button>
			</div>
			<div className='absolute right-0 bottom-0 w-[calc(50vw-6rem)] h-full'>
				<div className='absolute right-0 w-11/12 transform -translate-y-1/2 top-1/2'>
					<svg
						viewBox='0 0 580 671'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='absolute right-0 top-1/2 transform -translate-y-1/2'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M418.455 1.0962C507.681 -2.09196 598.116 24.1451 665.306 74.3036C729.332 122.1 755.574 194.75 773 265.771C788.843 330.341 776.293 394.084 759.57 458.493C740.925 530.306 733.008 609.129 670.654 659.957C604.532 713.857 606.404 541.053 474.93 572.053C474.93 572.053 405.318 607.432 190.818 642.336C138 642.336 28.9297 622.813 14.5 495.596C-13 426.096 4.35681 331.594 37.9999 260.336C69.97 192.622 117.933 135.479 186.193 91.4229C255.742 46.5341 331.303 4.21025 418.455 1.0962Z'
							fill='#CF94C6'
						/>
					</svg>
				</div>

				<div className='absolute right-0 top-0 w-full h-full'>
					<div className='absolute transform top-[calc(50%-4.5rem)] -rotate-90 left-0 -translate-y-1/2 translate-x-[21%]'>
						<Image src='/HeroDogDesktop.png' height={1250} width={875} alt='HeroDog' priority />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
