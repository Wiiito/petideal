'use client'

import { getOrgFromId } from '@/actions/org/get'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const DogComponent = ({ dog }) => {
	const [org, setOrg] = useState()
	const [heartColors, setHeartColors] = useState([])

	useEffect(() => {
		const getOrg = async () => {
			const _org = await getOrgFromId(dog.orgId)
			setOrg(_org)
		}

		const updateHearts = () => {
			let colors = ['#D1BECD', '#D1BECD', '#D1BECD', '#D1BECD', '#D1BECD']
			for (let i = 0; i < Math.round((dog.score * 100) / 20); i++) {
				colors[i] = '#FF9FC2'
			}
			setHeartColors(colors)
		}

		getOrg()
		updateHearts()
	}, [dog])

	return (
		<div className='relative w-full h-40 md:h-60 flex cursor-pointer'>
			<div className='relative h-full w-40 md:w-60 bg-white rounded-xl rounded-br-3xl overflow-hidden'>
				{dog.images[0] && (
					<Image
						src={'https://petideal.s3.us-east-1.amazonaws.com/' + dog.images[0]}
						fill
						style={{ objectFit: 'cover' }}
						alt={'dogImage: ' + dog.name}
					/>
				)}
			</div>
			<div className='h-[calc(100%-1.75rem)] mt-2 md:h-[calc(100%-3rem)] w-[calc(100%-9rem)] md:w-[calc(100%-15rem)] md:my-6 bg-ultraLightPastel rounded-r-xl p-2 md:p-4 pb-0 md:pb-0 overflow-x-hidden'>
				<div className='text-md font-bold text-gray md:mt-2'>{dog.name}</div>
				<div className='flex md:mt-2'>
					<div className='flex'>
						<Image
							src='/icons/location.svg'
							height={18}
							width={16}
							alt='location'
						/>
						<span className='text-sm w-96 font-semibold text-brown ml-2'>
							{org && org.fantasyName}
						</span>
					</div>
				</div>
				<div className='text-center font-bold uppercase md:mt-2 md:mb-2 text-md'>
					Compatibilidade
				</div>
				<div className='flex items-center justify-center'>
					<div className='flex gap-1 mr-2'>
						{heartColors.map((heartColor, i) => {
							return (
								<div key={i} className='h-5 w-5 *:w-full *:h-full'>
									<svg
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.860739 2.46491C1.5396 1.5021 2.54247 0.908367 3.6842 0.779992C4.54821 0.683711 5.35051 0.876273 6.10652 1.35768C6.49224 1.59838 6.83167 1.90327 7.15568 2.27235C7.38711 1.83909 7.66482 1.45396 7.98883 1.13302C8.62141 0.491149 9.37741 0.122071 10.226 0.0257902C11.3677 -0.102585 12.4786 0.250446 13.3426 1.03674C14.1912 1.80699 14.7312 2.93027 14.8701 4.19797C15.0089 5.49777 14.6695 6.74942 13.8055 8.12945C13.034 9.36506 11.8615 10.6488 10.5037 12.1572C10.0409 12.6707 9.51628 13.2484 8.97627 13.8582C8.83741 14.0187 8.63684 14.131 8.42084 14.147C8.20483 14.1791 8.00426 14.1149 7.81911 13.9866C7.15568 13.5052 6.5231 13.0558 5.96766 12.6707C4.33221 11.5153 2.91276 10.5204 1.89446 9.49344C0.75273 8.35411 0.16644 7.19874 0.0275811 5.89894C-0.0958491 4.63124 0.197301 3.41168 0.860739 2.46491Z'
											fill={heartColor}
										/>
									</svg>
								</div>
							)
						})}
					</div>
					<span className='text-sm font-bold italic text-brown'>
						{Number(dog.score * 100).toFixed(0)}%
					</span>
				</div>
				<div className='text-center mt-1 md:mt-3'>
					<span className='font-bold text-xl md:text-2xl border rounded-full px-8'>
						+
					</span>
				</div>
			</div>
		</div>
	)
}

export default DogComponent
