import Image from 'next/image'
import Link from 'next/link'

const Organizacao = () => {
	return (
		<div className='relative w-full flex mt-8 lg:mt-0 pt-10 lg:pt-0'>
			<div className='bg-darker w-full absolute left-0 bottom-0 h-full lg:h-2/3 '></div>
			<div className='absolute left-0 top-0 pointer-events-none'>
				<Image src='/patterns/paws.png' height={1000} width={1350} alt='paws' />
			</div>
			<div className='relative w-2/5 z-10 hidden lg:flex max-h-full justify-center'>
				<Image
					src='/homeCat.png'
					height={589}
					width={438}
					className='absolute bottom-0 max-h-full'
					alt='cat'
				/>
			</div>
			<div className='relative w-full lg:w-3/5'>
				<div className='relative lg:mt-[33.3%]'>
					<h5 className='text-white font-bold text-4xl pl-6'>
						Você trabalha em uma Organização?
					</h5>
					<p className='font-medium text-justify mt-4 pl-12 pr-12 lg:pr-20'>
						Se você é uma organização comprometida com a causa da adoção
						responsável e o bem-estar dos animais, associe-se à nossa
						iniciativa! Ao se juntar a nós, você terá a oportunidade de
						colaborar em projetos inovadores como o PETIDEAL, que visa otimizar
						o processo de adoção de animais de estimação e reduzir o abandono.
						Nossa plataforma digital conecta adotantes a animais compatíveis,
						promovendo laços duradouros e aliviando a pressão sobre abrigos.
						Juntos, podemos transformar a realidade dos animais e contribuir
						para uma sociedade mais justa e compassiva.
					</p>
					<div className='w-full flex justify-center mb-8'>
						<Link href='/auth/org/register'>
							<div className='border border-white px-8 py-4 text-white mt-4 rounded-xl text-xl font-bold'>
								Relacionar-se
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Organizacao
