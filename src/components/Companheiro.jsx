import Image from 'next/image'
import Link from 'next/link'

const Companheiro = () => {
	return (
		<>
			<div className='relative w-full min-h-[60vh] flex'>
				<Image
					src='/patterns/solid paws.png'
					fill
					alt='disnara'
					style={{
						objectFit: 'cover',
						objectPosition: '50% 50%',
					}}
				/>
				<div className='relative hidden md:block w-1/3 -mt-8'>
					<Image
						src='/orgPageCat.png'
						fill
						style={{ objectFit: 'contain', objectPosition: 'left' }}
					/>
				</div>
				<div className='w-full md:w-2/3 py-8 z-20 flex flex-col justify-center'>
					<h3 className='text-[#FC77A7] text-4xl font-bold text-center md:text-left px-8'>
						Quer Encontrar o Companheiro Ideal?
					</h3>
					<p className='font-medium text-justify text-base px-8 sm:pr-24 xl:pr-48 mt-8'>
						Se você é um futuro adotante comprometido com a causa da adoção
						responsável, junte-se à nossa iniciativa! Com o PETIDEAL, você terá
						a chance de encontrar o parceiro ideal para sua vida, conectando-se
						com animais que combinam com seu estilo de vida. Nossa plataforma
						torna o processo de adoção mais eficiente, promovendo laços
						duradouros e oferecendo um novo lar para animais que precisam de
						você. Vamos transformar juntos a vida dos animais e criar uma
						sociedade mais justa e amorosa!
					</p>
					<Link href='/'>
						<div className='m-auto mt-8 border border-black rounded-2xl py-2 px-8 text-xl font-bold text-center max-w-60'>
							Relacionar-se
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Companheiro
