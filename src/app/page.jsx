import getOrg from '@/actions/org/get'
import Header from '@/components/header'

export default async function Home() {
	let org = await getOrg(99999999999999)

	return (
		<main>
			<Header />
			{JSON.stringify(org)}
		</main>
	)
}
