import Form from './form'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
	return (
		<>
			<div className='formImages'>
				<Image
					src='/registerDog.png'
					width={1569}
					height={1940}
					priority
					alt='DogImage'
				/>
				<Image
					src='/registerCat.png'
					width={2048}
					height={2048}
					priority
					alt='CatImage'
				/>
			</div>
			<div className='form'>
				<Link href='/auth/user/signin'>
					<div className='absolute top-4 -right-8 z-50 w-32 h-9 content-center rounded-full font-semibold border border-black opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out'>
						Logar
					</div>
				</Link>
				<div className='formContent'>
					<h3>Crie sua conta!</h3>
					<Form />
				</div>
			</div>
		</>
	)
}

export default Page
