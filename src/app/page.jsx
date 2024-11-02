import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Funcionamento from '@/components/funcionamento/funcionamento'

import './home.scss'
import HomeUserButtons from '@/components/HomeUserButtons'

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
			<Funcionamento />
		</div>
	)
}
