'use client'

import { getPetCount, vectorSearch } from '@/actions/pet/get'
import { getEmbedding } from '@/actions/user/get'
import DogComponent from '@/components/DogComponent/DogComponent'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

const Page = () => {
	const [dogsOnDb, setDogsOnDb] = useState(0)
	useEffect(() => {
		const getDogsCount = async () => {
			const dogsOnDb = await getPetCount()
			setDogsOnDb(dogsOnDb)
		}
		getDogsCount()
	}, [])

	const { data: session, status } = useSession()

	const [dogs, setDogs] = useState(['Loading...'])
	const [loadedDogs, setLoadedDogs] = useState([])
	const [page, setPage] = useState(0)
	const [perPage, setPerPage] = useState(24)

	const changePage = async (page) => {
		await fetchDogs(page)
		loadDogs()
	}

	const loadDogs = () => {
		if (loadedDogs.length > (page - 1) * perPage && page > 0) {
			let currentDogs = []
			for (
				let i = (page - 1) * perPage;
				i < Math.min(page * perPage, dogsOnDb);
				i++
			) {
				currentDogs.push(loadedDogs[i])
			}

			setDogs(currentDogs)
		}
	}

	const fetchDogs = async (page) => {
		if (page > 1 && loadedDogs.length >= dogsOnDb) return

		if (loadedDogs.length < page * perPage) {
			const userEmbedding = await getEmbedding(session.user._id)
			const newDogs = await vectorSearch(userEmbedding.perfil, perPage, page)

			setLoadedDogs((prev) => {
				return [...prev, ...newDogs]
			})
		}
	}

	useEffect(() => {
		loadDogs()
	}, [loadedDogs])

	useEffect(() => {
		if (status === 'unauthenticated') {
			redirect('/auth/user/register')
		}
		if (status === 'authenticated') {
			setPage(1)
		}
	}, [status])

	useEffect(() => {
		if (page > 0) {
			changePage(page)
		}
	}, [page])

	return (
		<div className='px-16 xl:px-24'>
			<div className='relative min-h-36 px-8 pt-20 mt-20 pb-8 mb-8 bg-ultraLightPastel w-full rounded-lg'>
				<div className='absolute top-0 left-1/2 h-36 w-36 bg-light transform -translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center'>
					<Image src='/icons/paw.svg' width={50} height={55} alt='paw' />
				</div>
				<p className='text-center'>
					A espera acabou! Estes são os animaizinhos que mais combinam com você!
					Não perca tempo: no perfil de cada bichinho, você encontra todas as
					informações necessárias para entrar em contato com a organização.
					Agende uma visita e prepare-se para conhecer seu novo companheiro de
					aventuras! 💕
				</p>
			</div>
			<section className='grid grid-cols-1 lg:grid-cols-2 xl2:grid-cols-3 gap-x-6 gap-y-6'>
				{dogs[0] !== 'Loading...'
					? dogs.map((dog, i) => {
							return (
								<div key={i}>
									<DogComponent dog={dog} />
								</div>
							)
					  })
					: 'Loading...'}
			</section>
			<div className='mt-8 mb-8 flex items-center justify-center gap-4 *:w-8 *:h-8 *:bg-ultraLightPastel *:flex *:items-center *:justify-center *:font-bold *:text-primary *:rounded-xl'>
				{page > 1 ? (
					<button
						onClick={() => {
							setPage(Math.max(page - 1, 0))
						}}
					>
						{'<'}
					</button>
				) : (
					''
				)}
				<div className='cursor-default bg-gray'>{page}</div>
				{page < dogsOnDb / perPage ? (
					<button
						onClick={() => {
							setPage(page + 1)
							console.log(dogsOnDb, perPage)
						}}
					>
						{'>'}
					</button>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Page
