import Link from 'next/link'

const Page = () => {
	return (
		<>
			<h2>Dogs 🐶</h2>
			<Link href='/org/dashboard/dogs/create'>
				<div className='w-20 h-4'>Create dog</div>
			</Link>
		</>
	)
}

export default Page
