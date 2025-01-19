import SinglePage from '@/components/SinglePage'
import Image from 'next/image'

const PetidealPage = () => {
	return (
		<SinglePage>
			<div className='relative h-screen w-screen flex justify-center items-center'>
				<div className='px-8 md:px-[30vw] text-center'>
					<h1 className='text-5xl lg:text-7xl text-primary uppercase font-bold'>
						PETIDEAL
					</h1>
					<p className='mt-16 font-medium text-lg'>
						O PetIdeal utiliza tecnologia avançada para encontrar o animal de
						estimação perfeito para você. Através de um questionário detalhado,
						entendemos suas preferências e necessidades, apresentando opções de
						adoção que se encaixam perfeitamente no seu dia a dia. Com o
						PetIdeal, a adoção se torna uma experiência fácil e personalizada.
					</p>
				</div>
				<div className='absolute hidden w-[30vw] h-[100vw] md:block transform -rotate-90'>
					<div className='absolute bottom-0 h-[30vw]'>
						<Image
							src='/homeCat.png'
							width={438}
							height={589}
							priority
							className='h-full'
						/>
					</div>
				</div>
			</div>
		</SinglePage>
	)
}

export default PetidealPage
