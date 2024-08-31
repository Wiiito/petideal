import Link from 'next/link'

const DogComponent = ({ dog, children }) => {
	return (
		<div className='relative w-full h-60 rounded-2xl overflow-hidden border-black border'>
			<img src={dog.images[0]} alt='Dog Image' className='absolute -z-10' />
			<div className='h-1/2'></div>
			<div className='relative h-1/2 text pt-4 bg-gradient-to-b from-transparent to-30% to-white z-10 px-3'>
				<div className='flex justify-between'>
					<h4 className='text-2xl uppercase font-bold'>{dog.name}</h4>
					{dog.patronize ? 'Apadrinhe' : ''}
				</div>
				<div className='px-3'>{dog.description}</div>
				<div className='italic'>{dog.observation}</div>
				<div className='absolute flex gap-2 right-2 bottom-2'>
					<div className='right-2 bottom-2'>
						<Link href='/' className='bg-lightPastel px-2 rounded-md'>
							Editar
						</Link>
					</div>
					<div className='bg-darker px-2 rounded-md'>
						<button onClick={() => deletePet(dog._id)}>Adotar</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DogComponent
