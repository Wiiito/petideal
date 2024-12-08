import Form from './form'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
	return (
		<>
			<div className='formImages'>
				<Image
					src='/signinDog.png'
					width={744}
					height={879}
					priority
					alt='DogImage'
				/>
				<Image
					src='/signinCat.png'
					width={962}
					height={822}
					priority
					alt='CatImage'
				/>
			</div>
			<div className='form'>
				<Link href='/auth/user/register'>
					<div className='absolute top-4 -right-8 z-50  w-32 h-9 content-center rounded-full font-semibold bg-reallyLight text-white opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out'>
						Registrar-se
					</div>
				</Link>

				<div className='formContent'>
					<h3>Acesse sua conta!</h3>
					<Form />
				</div>
			</div>
		</>
	)
}

export default Page
