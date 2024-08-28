'use client'

import Image from 'next/image'

const ShowPet = ({ pet }) => {
	return (
		<>
			<div className='flex flex-col bg-lightGrey h-44'>
				<img src='' alt='fotoDodoguinhobonitinho' />

				{pet.name}
				<br></br>
				{pet.observation}
			</div>
		</>
	)
}

export default ShowPet
