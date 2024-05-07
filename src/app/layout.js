import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
	title: 'PetIdeal',
	description: 'Encontre o pet ideal para voce',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pt'>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
