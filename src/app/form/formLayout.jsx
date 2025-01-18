import './formStyles.scss'
import Image from 'next/image'
import Link from 'next/link'

const FormLayout = ({ children }) => {
	return (
		<div className='background px-8 lg:px-24 pt-8'>
			<div className='flex'>
				<Link href='/'>
					<Image
						src='./backArrow.svg'
						height={45}
						width={65}
						alt='backArrow'
						priority
					/>
				</Link>
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
					<div className='absolute -bottom-[4vw] -right-[4vw] w-[150%]'>
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
			<div className='bg-white rounded-3xl pt-12 lg:pt-24 px-8 lg:px-16'>
				{children}
			</div>
		</div>
	)
}

export default FormLayout
