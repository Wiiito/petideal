import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Funcionamento from '@/components/funcionamento/funcionamento'

import './home.scss'
import HomeUserButtons from '@/components/HomeUserButtons'
import Organizacao from '@/components/Organizacao'
import FAQSection from '@/components/FAQ/FAQUserHome'

export default function Home() {
	return (
		<div className='bodyBackground'>
			<div className='backgroundShadow'></div>
			<header className='flex justify-between px-8'>
				<Header />
				<div className='py-4'>
					<HomeUserButtons />
				</div>
			</header>
			<Hero />
			<Funcionamento
				dados='Iniciamos com uma série de perguntas estudadas para entender suas
					preferências e estilo de vida. Esses dados são essenciais para encontrar
					o pet ideal para você.'
				pesquisa='Com as suas respostas em mãos (ou melhor, em patas), começamos a
						investigar. Nossos detetives do bem (não os peludos, mas nossos
						algoritmos) vão procurar os pets disponíveis na sua vizinhança que
						combinam com você como queijo combina com goiabada - perfeitamente!'
				par='Finalmente, é hora do match perfeito! Você conhece seu novo amigo de
					quatro patas, e eles encontram um lar para chamar de seu. Adotar um
					pet através do PetIdeal não é só ganhar um companheiro fiel, é ser o
					herói da história de um bichinho. Então, vamos lá, seu futuro
					mascote está esperando para fazer uma entrada triunfal na sua vida!'
			/>
			<Organizacao className='relative' />
			<FAQSection className='relative z-40' />
		</div>
	)
}
