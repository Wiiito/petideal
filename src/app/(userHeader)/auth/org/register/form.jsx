'use client'

import { useState } from 'react'
import submitOrg from './action'
import { redirect } from 'next/navigation'

const Form = () => {
	const initialOrg = {
		cnpj: '',
		name: '',
		zipCode: '',
		address: '',
		addressNumber: '',
		addressNeighborhood: '',
		addressCity: '',
		addressState: '',
		addressComplement: '',
		email: '',
		password: '',
		contact: [],
	}

	const [org, setOrg] = useState(initialOrg)
	const [numbers, setNumbers] = useState([''])
	const [formError, setFormError] = useState(initialOrg)

	const handleSubmit = async () => {
		const result = await submitOrg(org)
		if (result.success) {
			redirect('/')
		} else {
			console.log('Something went wrong')
		}

		setFormError((prev) => {
			return {
				...prev, // Queria muito que tivesse um jeito melhor de fazer isso... que coisa feia
				cnpj: result.error.cnpj,
				name: result.error.name,
				zipCode: result.error.zipCode,
				address: result.error.address,
				addressNumber: result.error.addressNumber,
				addressNeighborhood: result.error.addressNeighborhood,
				addressCity: result.error.addressCity,
				addressState: result.error.addressState,
				addressComplement: result.error.addressComplement,
				email: result.error.email,
				password: result.error.password,
				contact: result.error.contact,
			}
		})

		return false
	}

	const handleChange = async (e) => {
		const name = e.target.name
		const value = e.target.value

		if (name === 'cnpj' && value.length === 14) {
			// Olha se o CNPJ é valido / pesquisa informações
			try {
				const res = await fetch(
					'https://brasilapi.com.br/api/cnpj/v1/' + e.target.value
				)
				const data = await res.json()

				setOrg((prev) => {
					return {
						...prev,
						name: data.nome_fantasia || data.razao_social,
						zipCode: data.cep,
						address: data.descricao_tipo_de_logradouro + ' ' + data.logradouro,
						addressNumber: data.numero,
						addressCity: data.municipio,
						addressNeighborhood: data.bairro,
						addressState: data.uf,
						addressComplement: data.complemento,
						contact: [data.ddd_telefone_1],
					}
				})
			} catch (error) {}
		}

		setOrg((prev) => {
			if (name === 'number') {
				const numbers = Array.from(document.getElementsByName('number')).map(
					(e) => e.value
				)
				setNumbers(numbers)
				const validNumbers = []
				numbers.forEach((e) => {
					if (e !== '') validNumbers.push(e)
				})
				return { ...prev, contact: validNumbers }
			}
			return { ...prev, [name]: value }
		})
	}

	return (
		<form action={handleSubmit}>
			<input
				type='text'
				placeholder='CNPJ'
				name='cnpj'
				onChange={handleChange}
				value={org.cnpj}
			/>
			<span>{formError.cnpj ? formError.cnpj[0] : ''}</span>
			<input
				type='text'
				placeholder='Nome fantasia'
				name='name'
				onChange={handleChange}
				value={org.name}
			/>
			<span>{formError.name ? formError.name[0] : ''}</span>

			<input
				type='number'
				placeholder='CEP'
				name='zipCode'
				onChange={handleChange}
				value={org.zipCode}
			/>
			<span>{formError.zipCode ? formError.zipCode[0] : ''}</span>
			<input
				type='text'
				placeholder='Endereço'
				name='address'
				onChange={handleChange}
				value={org.address}
			/>
			<span>{formError.address ? formError.address[0] : ''}</span>
			<input
				type='number'
				placeholder='Número'
				name='addressNumber'
				onChange={handleChange}
				value={org.addressNumber}
			/>
			<span>{formError.addressNumber ? formError.addressNumber[0] : ''}</span>
			<input
				type='text'
				placeholder='Complemento'
				name='addressComplement'
				onChange={handleChange}
				value={org.addressComplement}
			/>
			<span>
				{formError.addressComplement ? formError.addressComplement[0] : ''}
			</span>
			<input
				type='text'
				placeholder='Bairro'
				name='addressNeighborhood'
				onChange={handleChange}
				value={org.addressNeighborhood}
			/>
			<span>
				{formError.addressNeighborhood ? formError.addressNeighborhood[0] : ''}
			</span>
			<input
				type='text'
				placeholder='Estado'
				name='addressState'
				onChange={handleChange}
				value={org.addressState}
			/>
			<span>{formError.addressState ? formError.addressState[0] : ''}</span>
			<input
				type='text'
				placeholder='Cidade'
				name='addressCity'
				onChange={handleChange}
				value={org.addressCity}
			/>
			<span>{formError.addressCity ? formError.addressCity[0] : ''}</span>
			{numbers.map((e, i) => (
				<input
					type='number'
					placeholder='Telefone'
					name='number'
					key={i}
					onChange={handleChange}
					value={org.contact[i]}
				/>
			))}
			<span>{formError.contact ? formError.contact[0] : ''}</span>
			<input
				type='text'
				placeholder='Email'
				name='email'
				onChange={handleChange}
				value={org.email}
			/>
			<span>{formError.email ? formError.email[0] : ''}</span>
			<input
				type='password'
				placeholder='Senha'
				name='password'
				onChange={handleChange}
				value={org.password}
			/>
			<span>{formError.password ? formError.password[0] : ''}</span>
			<button
				type='button'
				onClick={() => {
					setNumbers((prev) => [...prev, ''])
				}}
			>
				Add Number
			</button>

			<button type='submit'>Enviar</button>
		</form>
	)
}

export default Form
