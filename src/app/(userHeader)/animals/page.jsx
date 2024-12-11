'use client'

import { vectorSearch } from '@/actions/pet/get'
import { getEmbedding } from '@/actions/user/get'
import DogComponent from '@/components/DogComponent/DogComponent'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

const Page = () => {
	const { data: session, status } = useSession()

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
		const userEmbedding = await getEmbedding(session.user._id)

		const newDogs = await vectorSearch(userEmbedding.perfil, perPage)

		setDogs(prev => {
			return [...dogs, ...newDogs]
		})
	}

	useEffect(() => {
		if (status === 'unauthenticated') {
			redirect('/auth/user/register')
		}
	}, [status])

	useEffect(() => {
		if (status === 'authenticated') {
			changePage(1)
		}
	}, [page, status])

	return (
		<section className='columns-2xs'>
			{dogs[0] !== 'Loading...'
				? dogs.map((dog, i) => {
						return (
							<>
								<DogComponent dog={dog} key={i} />
								Compatibilidade: {Number(dog.score * 100).toFixed(1)}%
							</>
						)
				  })
				: 'Loading...'}
		</section>
	)
}

export default Page
