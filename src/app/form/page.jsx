'use client'

import { updateEmbedding } from '@/actions/user/update'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import FormLayout from './formLayout'

const Page = () => {
	const { data: session, status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/auth/user/register')
		}
	}, [status])

	const handleSubmit = async (e) => {
		e.preventDefault()
		let userEmbedding = []
		Array.from(
			document.querySelector('form').querySelectorAll('input')
		).forEach((input) => {
			const changeValue = input.getAttribute('data-alter-value')
			userEmbedding[changeValue] = input.value / 100
		})
		console.log(userEmbedding)

		const user = await updateEmbedding(session.user._id, userEmbedding)
		router.push('/animals')

		return false
	}

	return (
		<>
			<FormLayout>
				<div className='question'>
					<div className='text'>Você é maior de 18 anos?</div>
					<div className='answers'>
						<input type='radio' name='idade' id='18sim' value='sim' />
						<label htmlFor='18sim'>Sim</label>
						<input type='radio' name='idade' id='18nao' value='nao' />
						<label htmlFor='18nao'>Não</label>
					</div>
				</div>
				<form method='post' onSubmit={handleSubmit}>
					<h3>Sobre você</h3>
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
						<div className='text'>Sua rotina se altera muito ou é estavel?</div>
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
							<span>Inseguro</span>
							<input type='range' name='' data-alter-value='15' />
							<span>Muito seguro</span>
						</div>
					</div>
					{/* coat_length */}
					<div className='question'>
						<div className='text'>
							Você se sentiria confortável dedicando tempo regularmente para
							escovar e manter os pelos longos de um cachorro livres de nós e
							sujeiras?
						</div>
						<div className='answers'>
							<span>Pouco confortável</span>
							<input type='range' name='' data-alter-value='7' />
							<span>Muito confortável</span>
						</div>
					</div>
					{/* coat-grooming-frequency */}
					<div className='question'>
						<div className='text'>
							Com que frequência você consegue dedicar tempo à cuidar da pelagem
							do animal?
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
							<span>Poucas visitas</span>
							<input type='range' name='' data-alter-value='9' />
							<span>Muitas visitas</span>
						</div>
					</div>
					{/* coat_care */}
					<div className='question'>
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
							Você mora com muitas crianças ou costuma receber crianças em casa?
						</div>
						<div className='answers'>
							<span>Poucas crianças</span>
							<input type='range' name='' data-alter-value='1' />
							<span>Muitas crianças</span>
						</div>
					</div>
					{/* shedding-level */}
					<div className='question'>
						<div className='text'>
							Você ou alguem que more com você tem alergias severas?
						</div>
						<div className='answers'>
							<span>Não tem alergias</span>
							<input type='range' name='' data-alter-value='3' />
							<span>Alergia muito severa</span>
						</div>
					</div>
					<h3>Residencia</h3>
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
						<div className='text'>Onde você mora, existem outros animais?</div>
						<div className='answers'>
							<span>Poucas animais</span>
							<input type='range' name='' data-alter-value='2' />
							<span>Muitas animais</span>
						</div>
					</div>
					<button>Enviar</button>
				</form>
			</FormLayout>
		</>
	)
}

export default Page
