import Link from 'next/link'
import Header from './header/header'
import { Leckerli_One } from 'next/font/google'

const Cursive = Leckerli_One({
	weight: '400',
	subsets: ['latin'],
})

const InsideHeader = () => {
	return (
		<header className='flex justify-between items-center px-16 min-h-16'>
			<Link href={'/'}>
				<h1 className={'text-2xl ' + Cursive.className}>PetIdeal.me</h1>
			</Link>
			<Header />
		</header>
	)
}

export default InsideHeader
