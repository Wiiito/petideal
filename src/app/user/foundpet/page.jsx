'use client'

import { getAllPets } from '@/actions/pet/get'
import FoundHeader from '@/components/foundHeader/foundHeader'
import ShowPet from '@/components/showPet/showPet'
import { useEffect, useState } from 'react'

const FoundPet = () => {
	const [dogs, setDogs] = useState([])

	useEffect(() => {
		const getDogs = async () => {
			setDogs(await getAllPets('', 1))
		}
		getDogs()
	}, [])

	return (
		<div className='flex flex-col'>
			<div className='h-28'>
				<FoundHeader />
			</div>

			<div className='h-full'>
				<nav className='flex flex-col space-y-8 h-full w-1/2 md:block lg:absolute lg:-translate-x-1/2 lg:left-1/2'>
					{Array.from(dogs).map((dog, index) => {
						return <ShowPet pet={dog} key={index} />
					})}
				</nav>
			</div>
		</div>
	)
}

export default FoundPet
