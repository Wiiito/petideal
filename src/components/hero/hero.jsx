import Image from 'next/image'

import './hero.scss'

const Hero = () => {
	return (
		<div className='relative overflow-hidden h-screen w-screen'>
			<div className='backgroundShadow'></div>
			<div className='w-[49.5vw] mt-24 ml-24'>
				<div className=' text-7xl font-bold leading-[5.625rem]'>
					Descubra seu companheiro <span className='uppercase'>ideal</span> de quatro patas!
				</div>
				<div className='w-2/3 text-lg mt-9'>
					Adotar um animal é mais do que dar um lar; é oferecer amor incondicional e transformar
					vidas para sempre.
				</div>
				<button className='uppercase bg-gradient-to-b from-vividOrange to-pastelRed font-bold text-white mt-16 w-80 h-20 text-3xl rounded-full'>
					Começar
				</button>
			</div>
			<div>
				<svg
					viewBox='0 0 746 738'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className=' absolute w-[60vw] -z-40 right-0 -bottom-60'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M434.174 0.259953C523.4 -2.9282 613.834 23.3089 681.024 73.4674C745.05 121.264 771.293 193.914 788.719 264.934C804.562 329.505 792.012 393.247 775.289 457.656C756.643 529.47 748.727 608.293 686.373 659.121C620.25 713.021 524.619 747.411 434.174 735.717C347.345 724.49 303.056 644.419 232.033 600.375C161.064 556.366 56.2996 545.888 18.9056 478.199C-19.4843 408.708 7.1315 325.428 40.7746 254.17C72.7447 186.457 133.652 134.643 201.911 90.5867C271.46 45.6979 347.021 3.37401 434.174 0.259953Z'
						fill='#FE7106'
					/>
				</svg>
				<div className='absolute top-[45%] left-[max(calc(50%+6rem),calc(100%-850px))] transform -translate-y-1/2 -rotate-90'>
					<Image src='/HeroDogDesktop.png' height={1000} width={700} alt='HeroDog' />
				</div>
			</div>
		</div>
	)
}

export default Hero
