import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Provider from '@/components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'PetIdeal',
	description: 'Encontre o pet ideal para voce',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pt'>
			<body className={inter.className}>
				<Provider>
					<main>{children}</main>
				</Provider>
			</body>
		</html>
	)
}
