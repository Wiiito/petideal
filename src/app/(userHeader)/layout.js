import InsideHeader from '@/components/InseideHeader'

const Layout = ({ children }) => {
	return (
		<>
			<InsideHeader />
			<section>{children}</section>
		</>
	)
}

export default Layout
