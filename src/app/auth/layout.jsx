import { Leckerli_One } from 'next/font/google'
import Link from 'next/link'

const Cursive = Leckerli_One({
	weight: '400',
	subsets: ['latin'],
})

import '@/styles/formStyles.scss'

const Layout = ({ children }) => {
	return (
		<div className='formContainer'>
			<div className='form'>
				<Link href={'/'}>
					<h1 className={'text-2xl text-light ' + Cursive.className}>
						PetIdeal.me
					</h1>
				</Link>
				<div className='formContent'>{children}</div>
			</div>
		</div>
	)
}

export default Layout
