import './formStyles.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const FormLayout = ({ children }) => {
	const router = useRouter()

	return (
		<div className='background px-8 lg:px-24 pt-8 pb-8'>
			<div className='flex'>
				<button onClick={() => router.back()}>
					<Image
						src='./backArrow.svg'
						height={45}
						width={65}
						alt='backArrow'
						priority
					/>
				</button>
			</div>
			<div className='flex w-full'>
				<div className='my-28 lg:my-56 lg:mx-30 w-2/3'>
					<h2 className='font-bold text-3xl md:text-5xl lg:text-7xl'>
						Bem-vindo(a) ao nosso{' '}
						<span className='uppercase text-primary'>formulario </span>
						de adoção.
					</h2>
				</div>
				<div className='w-1/3 relative'>
					<div className='absolute -bottom-[4vw] -right-[4vw] w-[150%] z-10'>
						<Image
							src='/gatoFormulario.png'
							height={658}
							width={737}
							alt='cat'
							priority
						/>
					</div>
				</div>
			</div>
			<div className='relative bg-white rounded-3xl pt-12 lg:pt-24 px-8 lg:px-16'>
				<div className='absolute transform w-16 h-16 lg:w-32 lg:h-32 -translate-x-1/2 -translate-y-1/2 bg-light rounded-full left-1/2 -top-2 p-6'>
					<div className='relative w-full h-full'>
						<Image
							src='/icons/file.svg'
							fill
							style={{ objectFit: 'contain', objectPosition: 'center' }}
							alt='file'
						/>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}

export default FormLayout
