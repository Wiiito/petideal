'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { getPageOfPets } from '@/actions/pet/get'
import adoptPet from './action'
import DogComponent from '@/components/DogComponent/DogComponent'

const Page = () => {
	const { data: session, status } = useSession()

	const [dogs, setDogs] = useState({})

	useEffect(() => {
		const requestDogs = async () => {
			setDogs(await getPageOfPets(session.user._id, 1))
		}
		if (status === 'authenticated') requestDogs()
	}, [status, session])

	return (
		<>
			<div className='flex'>
				<h2>Dogs 🐶</h2>
				<Link href='/org/dashboard/dogs/create'>
					<div className='w-20 h-4'>Create dog</div>
				</Link>
			</div>
			<div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6'>
				{Array.from(dogs).map((dog, index) => {
					return <DogComponent dog={dog} key={index} />
				})}
			</div>
		</>
	)
}

export default Page
