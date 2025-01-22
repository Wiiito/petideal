import Image from 'next/image'
import Link from 'next/link'

const OrgHero = () => {
	return (
		<div className='h-screen w-full pt-24 px-8 flex flex-col md:flex-row'>
			<div className='md:2/3 flex flex-col justify-around gap-4 md:justify-normal h-full pb-16 md:pt-16 md:px-8'>
				<h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl text-justify'>
					Encontre os adotantes <span className='text-primary'>IDEAIS</span>{' '}
					para os animais da sua instituição!
				</h2>
				<p className='text-justify mt-4 text-lg font-medium'>
					Junte-se à Petideal nessa incrível jornada de amor e cuidado,
					conectando seus animais a lares ideais e transformando vidas juntos!
				</p>
				<div className='flex justify-around'>
					<Link href='/org/dashboard/dogs'>
						<div className='uppercase bg-lightPastel py-4 text-center px-16 mt-4 text-white font-bold text-xl rounded-full shadow-md'>
							Começar
						</div>
					</Link>
					<div></div>
				</div>
			</div>
			<div className='hidden md:block w-full relative overflow-hidden mt-4'>
				<Image
					src='/orgHeroDog.png'
					fill
					sizes='50vw'
					alt='dog'
					style={{ objectFit: 'contain', objectPosition: 'bottom' }}
					priority
				/>
			</div>
		</div>
	)
}

export default OrgHero
