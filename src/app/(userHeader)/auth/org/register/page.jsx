import React from 'react'
import Form from './form'
import Link from 'next/link'

const page = () => {
	return (
		<>
			<div className='subtitle'>
				<h4>Cadastro</h4>
				<Link href='/auth/org/signin'>Desejo entrar na minha conta</Link>
			</div>
			<Form />
		</>
	)
}

export default page
