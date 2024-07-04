import Hero from '@/components/hero/hero'

import './home.scss'
import Header from '@/components/header'

export default function Home() {
	return (
		<div className='bodyBackground'>
			<div className='backgroundShadow'></div>
			<Header />
			<Hero />
			Alala
		</div>
	)
}
