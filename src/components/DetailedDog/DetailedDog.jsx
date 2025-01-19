import { getOrgFromId } from '@/actions/org/get'
import { getRaceFromId } from '@/actions/race/get'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const DetailedDog = ({ dog, overlay }) => {
	const [race, setRace] = useState({})
	const [org, setOrg] = useState({})
	const [currentSlide, setCurrentSlide] = useState(1)
	const [heartColors, setHeartColors] = useState([])
	const slider = useRef(null)

	useEffect(() => {
		slider.current.style.width = dog.images.length * 100 + '%'

		const updateHearts = () => {
			let colors = ['#D1BECD', '#D1BECD', '#D1BECD', '#D1BECD', '#D1BECD']
			for (let i = 0; i < Math.round((dog.score * 100) / 20); i++) {
				colors[i] = '#FF9FC2'
			}
			setHeartColors(colors)
		}

		const getOrg = async () => {
			const _org = await getOrgFromId(dog.orgId)
			setOrg(_org)
		}

		const getRace = async () => {
			const _race = await getRaceFromId(dog.raceId)
			setRace(_race)
		}

		updateHearts()
		getOrg()
		getRace()
	}, [])

	function formatNumber(number) {
		let newNum = '('
		if (number > 10) {
			newNum += number.substring(0, 2) + ') '
			newNum += number.substring(2, 6) + '-' + number.substring(6, 10)
		}

		return newNum
	}

	return (
		<div className='fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-lg z-50 flex justify-center items-center'>
			<div className='relative block lg:flex w-4/5 rounded-3xl overflow-hidden bg-ultraLightPastel min-h-96 max-h-[80vh] overflow-y-scroll'>
				<div
					className='absolute z-40 top-4 left-4 cursor-pointer text-2xl font-bold text-black bg-ultraLightPastel w-12 h-12 rounded-full flex items-center justify-center'
					onClick={() => overlay(false)}
				>
					{'<'}
				</div>
				<div className='w-full h-96 lg:h-auto bg-white lg:w-1/2 overflow-hidden'>
					<div className='flex h-full' ref={slider}>
						{dog.images.map((image, i) => {
							return (
								<div key={i} className='relative w-full h-full'>
									<Image
										src={'https://petideal.s3.us-east-1.amazonaws.com/' + image}
										alt={'dogImage' + i}
										fill
									/>
								</div>
							)
						})}
					</div>
				</div>
				<div className='py-4 px-8 lg:w-1/2 lg:h-full'>
					<h4 className='text-2xl font-medium lg:mt-2'>{dog.name}</h4>
					<div className='flex gap-1 mr-2 lg:mt-2'>
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
						<span className='text-sm font-bold italic text-brown'>
							{Number(dog.score * 100).toFixed(0)}%
						</span>
					</div>
					<div className='lg:mt-2'>
						<span className='font-semibold text-gray'>Raça: </span>
						<span className='font-normal text-brown'>{race.name}</span>
					</div>
					{dog.description && (
						<div className='lg:mt-2'>
							<span className='font-semibold text-primary'>Sobre mim: </span>
							<span className='font-normal text-brown'>{dog.description}</span>
						</div>
					)}
					{dog.observation[0] && (
						<div className='lg:mt-2'>
							<div className='font-semibold text-gray'>Observações:</div>
							<div className='font-normal text-brown'>
								{dog.observation.map((observation, i) => {
									return (
										<div className='ml-2' key={i}>
											- {observation}
										</div>
									)
								})}
							</div>
						</div>
					)}
					<div className='lg:mt-2'>
						<div className='font-semibold text-gray'>
							Informe interesse por:
						</div>
						<div className='ml-2'>
							<div className='font-normal text-brown'>
								<span className='font-semibold'>Email: </span>
								{org.email ? org.email : 'Carregando...'}
							</div>
							<div>
								{org.contactNumbers && (
									<>
										<div className='font-semibold text-brown'>Telefones: </div>
										{org.contactNumbers.map((number, i) => (
											<div className='ml-2 text-brown' key={'number' + i}>
												{formatNumber(number)}
											</div>
										))}
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailedDog
