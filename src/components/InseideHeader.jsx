import Link from 'next/link'
import Header from './header/header'
import { Leckerli_One } from 'next/font/google'

const Cursive = Leckerli_One({
	weight: '400',
	subsets: ['latin'],
})

const InsideHeader = () => {
	return (
		<header className='lg:pt-4 flex justify-between items-center px-16'>
			<Link href={'/'}>
				<h1 className={'text-2xl ' + Cursive.className}>PetIdeal.me</h1>
			</Link>
			<Header />
		</header>
	)
}

export default InsideHeader
