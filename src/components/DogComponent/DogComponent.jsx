const DogComponent = ({ dog, children }) => {
	return (
		<div className='relative w-full h-60 rounded-2xl overflow-hidden border-black border'>
			<img
				src={'https://petideal.s3.us-east-1.amazonaws.com/' + dog.images[0]}
				alt='Dog Image'
				className='absolute -z-10'
			/>
			<div className='h-1/2'></div>
			<div className='relative h-1/2 text pt-4 bg-gradient-to-b from-transparent to-30% to-white z-10 px-3'>
				<div className='flex justify-between'>
					<h4 className='text-2xl uppercase font-bold'>{dog.name}</h4>
					{dog.patronize && 'Apadrinhe'}
				</div>
				<div className='px-3'>{dog.description}</div>
				<div className='italic'>{dog.observation}</div>
			</div>
		</div>
	)
}

export default DogComponent
