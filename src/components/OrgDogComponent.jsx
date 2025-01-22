import Image from 'next/image'

const OrgDogComponent = ({ dog }) => {
	return (
		<div className='w-36 h-48 rounded-xl overflow-hidden shadow-md'>
			<div className='w-36 h-36 relative rounded-xl overflow-hidden'>
				<Image
					src={'https://petideal.s3.us-east-1.amazonaws.com/' + dog.images[0]}
					style={{ objectFit: 'cover' }}
					fill
					sizes='25vw'
					alt={dog.name}
					priority
				/>
			</div>
			<div className='w-full h-12 flex items-center justify-left px-4 text-gray'>
				{dog.name}
			</div>
		</div>
	)
}

export default OrgDogComponent
