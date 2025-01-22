import Form from './form'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
	return (
		<>
			<Link href='/org/dashboard/dogs' className='absolute top-4 left-4 z-10'>
				<div>
					<Image
						src='/backArrow.svg'
						width={28.8}
						height={20}
						alt='BackArrow'
					/>
				</div>
			</Link>
			<Form />
		</>
	)
}

export default Page
