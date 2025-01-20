import SinglePage from '@/components/SinglePage'
import HomeUserButtons from '@/components/HomeUserButtons'
import Image from 'next/image'

const PetidealPage = () => {
	return (
		<SinglePage>
			<div className='absolute right-4 top-4 z-50'>
				<HomeUserButtons />
			</div>
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
				<div className='absolute hidden w-[30vw] h-screen md:block right-0'>
					<div className='absolute transform right-0 -translate-y-1/2 top-1/2'>
						<Image
							src='/petideal-cat.png'
							width={465}
							height={400}
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
