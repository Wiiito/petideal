'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Form = () => {
	const { data: session, status } = useSession()
	const [data, setData] = useState({ cnpj: '' })

	useEffect(
		// Credo, coisa feia
		() =>
			setData({ cnpj: status === 'authenticated' ? session.user.cnpj : '' }),
		[session]
	)

	return (
		<form action=''>
			<label htmlFor=''>Name :</label>
			<input type='text' name='name' placeholder='Name' />
			<input type='hidden' name='orgId' value={data.cnpj} readOnly />
			<label htmlFor='patronize'>Apadrinhavel?</label>
			<input type='checkbox' name='patronize' id='patronize' />
			<button type='submit'>Cadastrar</button>
		</form>
	)
}

export default Form
