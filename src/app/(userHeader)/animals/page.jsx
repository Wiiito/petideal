'use client'

import DetailedDog from '@/components/DetailedDog/DetailedDog'

import { useEffect, useState } from 'react'
import AnimalsContent from './animalsContent'

const Page = () => {
	const [detailedDog, setDetailedDog] = useState({})
	const [isDetailedDog, setIsDetailedDog] = useState(false)

	const calledDogDetails = (dog) => {
		setDetailedDog(dog)
		setIsDetailedDog(true)
	}

	useEffect(() => {
		const overlay = document.getElementById('overlay')
		if (isDetailedDog) overlay.classList.remove('hidden')
		else overlay.classList.add('hidden')
	}, [isDetailedDog])

	return (
		<>
			<div className='hidden' id='overlay'>
				{isDetailedDog && (
					<DetailedDog dog={detailedDog} overlay={setIsDetailedDog} />
				)}
			</div>
			<AnimalsContent
				setDetailedDog={setDetailedDog}
				setIsDetailedDog={setIsDetailedDog}
				calledDogDetails={calledDogDetails}
			/>
		</>
	)
}

export default Page
