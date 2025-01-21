'use client'

import { updateEmbedding } from '@/actions/user/update'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FormLayout from './formLayout'

const Page = () => {
	const { data: session, status } = useSession()
	const router = useRouter()
	const [adult, setAdult] = useState(false)

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/auth/user/register')
		}
	}, [status])

	const handleSubmit = async (e) => {
		e.preventDefault()
		let userEmbedding = []

		if (!adult) {
			alert('Você deve ser maior de idade para adotar animais! 😥')
			return
		}

		Array.from(
			document.querySelector('form').querySelectorAll('input')
		).forEach((input) => {
			const changeValue = input.getAttribute('data-alter-value')
			userEmbedding[changeValue] = input.value / 100
		})

		await updateEmbedding(session.user._id, userEmbedding)
		router.push('/animals')

		return false
	}

	const changeEighteen = () => {
		if (document.getElementById('18sim').checked) {
			document.getElementById('18LabelSim').classList.add('checked')
			document.getElementById('18LabelNao').classList.remove('checked')
			setAdult(true)
		} else {
			document.getElementById('18LabelSim').classList.remove('checked')
			document.getElementById('18LabelNao').classList.add('checked')
			setAdult(false)
		}
	}

	return (
		<>
			<FormLayout>
				<div className='border-2 border-dashed rounded-3xl border-darker'>
					<h3>Sobre você</h3>
					<div className='question'>
						<div className='text'>Você é maior de 18 anos?</div>
						<div className='answers'>
							<div>
								<input
									type='radio'
									name='idade'
									id='18sim'
									value='sim'
									className='hidden'
									onChange={changeEighteen}
								/>
								<label
									id='18LabelSim'
									htmlFor='18sim'
									className='eighteenLabel bg-reallyLight text-white uppercase px-6 py-2 rounded-xl font-bold shadow-md transform -translate-y-1/2 sm:-translate-y-0'
								>
									Sim
								</label>
								<input
									type='radio'
									name='idade'
									id='18nao'
									value='nao'
									className='hidden'
									onChange={changeEighteen}
								/>
								<label
									id='18LabelNao'
									htmlFor='18nao'
									className='eighteenLabel bg-reallyLight text-white uppercase px-6 py-2 rounded-xl font-bold shadow-md transform -translate-y-1/2 sm:-translate-y-0 ml-8'
								>
									Não
								</label>
							</div>
						</div>
					</div>
					<form method='post' onSubmit={handleSubmit}>
						{/* energy-level */}
						<div className='question'>
							<div className='text'>
								Você tem disposição para atividades que exigem mais energia e
								movimento, ou prefere algo mais tranquilo?
							</div>
							<div className='answers'>
								<span>Pouca disposição</span>
								<input type='range' name='' data-alter-value='13' />
								<span>Muita disposição</span>
							</div>
						</div>
						{/* trainability-level */}
						<div className='question'>
							<div className='text'>Tem interesse em treinar o animal?</div>
							<div className='answers'>
								<span>Nenhum interesse</span>
								<input type='range' name='' data-alter-value='12' />
								<span>Muitor interesse</span>
							</div>
						</div>
						{/* adaptability-level */}
						<div className='question'>
							<div className='text'>
								Sua rotina se altera muito ou é estavel?
							</div>
							<div className='answers'>
								<span>Estavel</span>
								<input type='range' name='' data-alter-value='11' />
								<span>Muito alterada</span>
							</div>
						</div>
						{/* watchdog/protective-nature */}
						<div className='question'>
							<div className='text'>
								Você se sente mais seguro ao lado de animais?
							</div>
							<div className='answers'>
								<span>Inseguro</span>
								<input type='range' name='' data-alter-value='10' />
								<span>Muito seguro</span>
							</div>
						</div>
						{/* mental-stimulation-needs */}
						<div className='question'>
							<div className='text'>
								Você consegue prover atividades diferentes ao animal?
							</div>
							<div className='answers'>
								<span>Não</span>
								<input type='range' name='' data-alter-value='15' />
								<span>Sim</span>
							</div>
						</div>
						{/* coat_length */}
						<div className='question'>
							<div className='text'>
								Estaria disposto a dedicar tempo diariamente para escovar e
								cuidar dos pelos longos de um cachorro?
							</div>
							<div className='answers'>
								<span>Pouco disposto</span>
								<input type='range' name='' data-alter-value='7' />
								<span>Muito disposto</span>
							</div>
						</div>
						{/* coat-grooming-frequency */}
						<div className='question'>
							<div className='text'>
								Com que frequência você consegue dedicar tempo à cuidar da
								pelagem do animal?
							</div>
							<div className='answers'>
								<span>Nunca</span>
								<input type='range' name='' data-alter-value='4' />
								<span>Sempre</span>
							</div>
						</div>
						{/* drooling-level */}
						<div className='question'>
							<div className='text'>
								Você se sente confortável com as necessidades básicas de um
								animal?
							</div>
							<div className='answers'>
								<span>Pouco confortável</span>
								<input type='range' name='' data-alter-value='5' />
								<span>Muito confortável</span>
							</div>
						</div>
						{/* playfulness-level */}
						<div className='question'>
							<div className='text'>
								Você esta dispostas a dedicar tempo para brincar com o animal?
							</div>
							<div className='answers'>
								<span>Não</span>
								<input type='range' name='' data-alter-value='9' />
								<span>Sim</span>
							</div>
						</div>
						{/* coat_care */}
						<div className='question questionWithoutBorder'>
							<div className='text'>Você tem muito tempo livre?</div>
							<div className='answers'>
								<span>Pouco tempo livre</span>
								<input type='range' name='' data-alter-value='6' />
								<span>Muito tempo livre</span>
							</div>
						</div>
						<h3>Contexto familiar</h3>
						{/* affectionate-with-family */}
						<div className='question'>
							<div className='text'>Você mora com muitas pessoas?</div>
							<div className='answers'>
								<span>Poucas pessoas</span>
								<input type='range' name='' data-alter-value='0' />
								<span>Muitas pessoas</span>
							</div>
						</div>
						{/* good-with-young-children */}
						<div className='question'>
							<div className='text'>
								Você mora com muitas crianças ou costuma receber crianças em
								casa?
							</div>
							<div className='answers'>
								<span>Poucas crianças</span>
								<input type='range' name='' data-alter-value='1' />
								<span>Muitas crianças</span>
							</div>
						</div>
						{/* shedding-level */}
						<div className='question questionWithoutBorder'>
							<div className='text'>
								Você ou alguem que more com você tem alergias severas?
							</div>
							<div className='answers'>
								<span>Não tem alergias</span>
								<input type='range' name='' data-alter-value='3' />
								<span>Alergia muito severa</span>
							</div>
						</div>
						<h3>Residência</h3>
						{/* barking-level */}
						<div className='question'>
							<div className='text'>Onde você mora, barulho é um problema?</div>
							<div className='answers'>
								<span>Não</span>
								<input type='range' name='' data-alter-value='14' />
								<span>Sim</span>
							</div>
						</div>
						{/* openness-to-strangers */}
						<div className='question'>
							<div className='text'>Você costuma receber muitas visitas?</div>
							<div className='answers'>
								<span>Poucas visitas</span>
								<input type='range' name='' data-alter-value='8' />
								<span>Muitas visitas</span>
							</div>
						</div>
						{/* good-with-other-dogs */}
						<div className='question'>
							<div className='text'>
								Onde você mora, existem outros animais?
							</div>
							<div className='answers'>
								<span>Poucas animais</span>
								<input type='range' name='' data-alter-value='2' />
								<span>Muitas animais</span>
							</div>
						</div>
						<button className='my-4 py-2 px-20 bg-lightPastel shadow-md rounded-3xl text-2xl text-white font-bold'>
							Enviar
						</button>
					</form>
				</div>
				<div className='h-8'></div>
			</FormLayout>
		</>
	)
}

export default Page
