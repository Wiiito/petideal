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
			redirect('/org/dashboard/dogs')
		} else {
			console.log('Alguma coisa deu errado')
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
			<div className='line'>
				<div>
					<div className='text'>CNPJ: </div>
					<input
						type='text'
						name='cnpj'
						onChange={handleChange}
						value={org.cnpj}
					/>
					<div className='errorMessage'>
						<span>{formError.cnpj ? formError.cnpj[0] : ''}</span>
					</div>
				</div>
				<div>
					<div className='text'>Nome Fantasia: </div>
					<input
						type='text'
						name='name'
						onChange={handleChange}
						value={org.name}
					/>
					<div className='errorMessage'>
						<span>{formError.name ? formError.name[0] : ''}</span>
					</div>
				</div>
			</div>
			<div className='line'>
				<div>
					<div className='text'>CEP: </div>
					<input
						type='number'
						name='zipCode'
						onChange={handleChange}
						value={org.zipCode}
					/>
					<div className='errorMessage'>
						<span>{formError.zipCode ? formError.zipCode[0] : ''}</span>
					</div>
				</div>
				<div>
					<div className='text'>Logadouro: </div>
					<input
						type='text'
						name='address'
						onChange={handleChange}
						value={org.address}
					/>
					<div className='errorMessage'>
						<span>{formError.address ? formError.address[0] : ''}</span>
					</div>
				</div>
				<div>
					<div className='text'>Número: </div>
					<input
						type='number'
						name='addressNumber'
						onChange={handleChange}
						value={org.addressNumber}
					/>
					<div className='errorMessage'>
						<span>
							{formError.addressNumber ? formError.addressNumber[0] : ''}
						</span>
					</div>
				</div>
			</div>
			<div className='line'>
				<div>
					<div className='text'>Complemento: </div>
					<input
						type='text'
						name='addressComplement'
						onChange={handleChange}
						value={org.addressComplement}
					/>
					<div className='errorMessage'>
						<span>
							{formError.addressComplement
								? formError.addressComplement[0]
								: ''}
						</span>
					</div>
				</div>
				<div>
					<div className='text'>Bairro: </div>
					<input
						type='text'
						name='addressNeighborhood'
						onChange={handleChange}
						value={org.addressNeighborhood}
					/>
					<div className='errorMessage'>
						<span>
							{formError.addressNeighborhood
								? formError.addressNeighborhood[0]
								: ''}
						</span>
					</div>
				</div>
				<div>
					<div className='text'>Estado: </div>
					<input
						type='text'
						name='addressState'
						onChange={handleChange}
						value={org.addressState}
					/>
					<div className='errorMessage'>
						<span>
							{formError.addressState ? formError.addressState[0] : ''}
						</span>
					</div>
				</div>
				<div>
					<div className='text'>Cidade: </div>
					<input
						type='text'
						name='addressCity'
						onChange={handleChange}
						value={org.addressCity}
					/>
					<div className='errorMessage'>
						<span>{formError.addressCity ? formError.addressCity[0] : ''}</span>
					</div>
				</div>
			</div>
			<div className='numberContainer'>
				<div>
					<div className='text'>Contatos: </div>
					{numbers.map((e, i) => (
						<input
							type='number'
							name='number'
							key={i}
							onChange={handleChange}
							value={org.contact[i]}
						/>
					))}
					<button
						type='button'
						onClick={() => {
							setNumbers((prev) => [...prev, ''])
						}}
					>
						+
					</button>
					<div>
						<span>{formError.contact ? formError.contact[0] : ''}</span>
					</div>
				</div>
			</div>
			<div className='line'>
				<div>
					<div className='text'>Email: </div>
					<input
						type='text'
						name='email'
						onChange={handleChange}
						value={org.email}
					/>
					<div className='errorMessage'>
						<span>{formError.email ? formError.email[0] : ''}</span>
					</div>
				</div>
				<div>
					<div className='text'>Senha: </div>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={org.password}
					/>
					<div className='errorMessage'>
						<span>{formError.password ? formError.password[0] : ''}</span>
					</div>
				</div>
			</div>

			<button className='submitButton' type='submit'>
				Registar-se
			</button>
		</form>
	)
}

export default Form
