'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/auth/user/signin')
		},
	})

	useEffect(() => {}, [session])

	const handleSubmit = (e) => {
		return false
	}

	return (
		<>
			<div className='fixed h-screen w-screen top-0 left-0 -z-10'>
				<Image
					src='/authPageBackground.svg'
					fill
					objectFit='cover'
					alt='background'
				/>
			</div>
			<div className='flex-col flex items-center lg:mt-16'>
				<div className='w-44 h-44 p-1 border-primary border-2 rounded-full'>
					<div className='h-full w-full rounded-full overflow-hidden'>
						<Image src='/user.jpg' height={980} width={980} alt='user' />
					</div>
				</div>
				<form className='w-full p-4' action={handleSubmit}>
					<div className='mt-4 lg:text-center'>
						<h5>Nome:</h5>
						<div className='w-full flex justify-center lg:max-w-96 lg:transform lg:-translate-x-1/2 lg:ml-[50%]'>
							<input
								type='text'
								defaultValue={
									status === 'authenticated' ? session.user.name : 'Carregando'
								}
								className='border-b focus:border-primary border-transparent outline-none text-2xl w-full bg-trueWhite bg-opacity-35 rounded-full px-3 py-1 backdrop-blur-md'
								id='name'
							/>
							<label
								htmlFor='name'
								className='relative w-8 h-8 text-2xl ml-4 cursor-pointer'
							>
								<Image src='/icons/pencil.svg' alt='pencil' fill />
							</label>
						</div>
					</div>
					<div className='mt-4 lg:text-center'>
						<h5>Email:</h5>
						<div className='w-full flex justify-center lg:max-w-96 lg:transform lg:-translate-x-1/2 lg:ml-[50%]'>
							<input
								type='text'
								defaultValue={
									status === 'authenticated' ? session.user.email : 'Carregando'
								}
								className='border-b focus:border-primary border-transparent outline-none text-xl w-full bg-trueWhite bg-opacity-35 rounded-full px-3 py-1 backdrop-blur-md'
								id='email'
							/>
							<label
								htmlFor='email'
								className='relative w-8 h-8 text-2xl ml-4 cursor-pointer'
							>
								<Image src='/icons/pencil.svg' alt='pencil' fill />
							</label>
						</div>
					</div>
					<div className='mt-4 lg:text-center'>
						<h5>Senha:</h5>
						<div className='w-full flex justify-center lg:max-w-96 lg:transform lg:-translate-x-1/2 lg:ml-[50%]'>
							<input
								type='password'
								className='border-b focus:border-primary border-transparent outline-none text-xl w-full bg-trueWhite bg-opacity-35 rounded-full px-3 py-1 backdrop-blur-md'
								id='password'
								placeholder='**********'
							/>
							<label
								htmlFor='password'
								className='relative w-8 h-8 text-2xl ml-4 cursor-pointer'
							>
								<Image src='/icons/pencil.svg' alt='pencil' fill />
							</label>
						</div>
					</div>
					<button
						type='submit'
						className='mt-4 ml-[50%] transform -translate-x-1/2 border-primary border bg-trueWhite bg-opacity-30 backdrop-blur-sm rounded-xl px-16 py-2'
					>
						Salvar Alterações
					</button>
				</form>
				<Link href='/form'>
					<div className='border-primary border bg-trueWhite bg-opacity-30 backdrop-blur-sm rounded-xl px-16 py-2 mb-4'>
						Refazer formulario
					</div>
				</Link>
				<button
					className='border-error border px-16 py-2 rounded-xl font-bold bg-error bg-opacity-20 backdrop-blur-md cursor-pointer hover:bg-opacity-30 transition-all duration-200 mb-4'
					onClick={signOut}
				>
					Sair
				</button>
			</div>
		</>
	)
}

export default Page
