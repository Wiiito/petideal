'use client'

import { getFromAllPageOfPets } from '@/actions/pet/get'
import DogComponent from '@/components/DogComponent/DogComponent'
import { useEffect, useState } from 'react'

const Page = () => {
	const [dogs, setDogs] = useState(['Loading...'])
	const [loadedDogs, setLoadedDogs] = useState(['Loading...'])
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(20)

	const changePage = async page => {
		if (dogs[0] === 'Loading...') {
			dogs.pop()
		}

		if (page * perPage < dogs.length) {
			let newDogs = []
			for (let i = 0; i < perPage; i++) {
				newDogs.add(dogs[(page - 1) * perPage + i])
			}
			setLoadedDogs(newDogs)
			return
		}

		fetchDogs(page)
	}

	const fetchDogs = async page => {
		const newDogs = await getFromAllPageOfPets(page, perPage)

		setDogs(prev => {
			return [...dogs, ...newDogs]
		})
	}

	useEffect(() => {
		changePage(1)
		console.log(dogs)
	}, [page])

	useEffect(() => {
		console.log(dogs)
	}, [dogs])

	return (
		<section>
			{dogs[0] !== 'Loading...'
				? dogs.map((dog, i) => {
						return <DogComponent dog={dog} key={i} />
				  })
				: 'Loading...'}
		</section>
	)
}

export default Page
