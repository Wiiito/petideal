import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Funcionamento from '@/components/funcionamento/funcionamento'

import './home.scss'

export default function Home() {
	return (
		<div className='bodyBackground'>
			<div className='backgroundShadow'></div>
			<Header />
			<Hero />
			<Funcionamento />
		</div>
	)
}
