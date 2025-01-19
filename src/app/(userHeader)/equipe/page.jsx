import Image from 'next/image'
import HomeUserButtons from '@/components/HomeUserButtons'

const Team = () => {
	return (
		<>
			<div className='absolute right-4 top-4 z-50'>
				<HomeUserButtons />
			</div>
			<div className='absolute left-0 top-0 w-screen h-screen flex justify-center items-center'>
				<div className='block md:flex items-center'>
					<div className='md:w-1/2 flex flex-col justify-center'>
						<h3 className='text-5xl font-bold text-center'>
							Oi, <span className='uppercase text-primary'>você!</span>
						</h3>
						<p className='text-justify py-8 px-16 md:text-xl'>
							Somos Erick Rezende Santana, Flávio Henrique de Sousa Saldanha e
							Maria Eduarda Oliveira, uma equipe apaixonada por tecnologia e
							inovação. Atualmente, cursamos o terceiro ano de Informática no
							CEFET - Contagem e desenvolvemos o PETIDEAL como nosso projeto de
							conclusão de curso.
						</p>
					</div>
					<div className='relative mx-16 md:py-8 flex justify-center h-[40vw] w-[calc(100vw-8rem)] md:w-1/2 md:h-[30vw]'>
						<Image src='/us.png' fill />
					</div>
				</div>
			</div>
		</>
	)
}

export default Team
