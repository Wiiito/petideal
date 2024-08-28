'use client'

import Image from 'next/image'

const ShowPet = ({ pet }) => {

	return (
		<>
        <div className="flex flex-col bg-lightGrey h-44">
            <Image
                src=''
                height={64}
                width={64}
                alt='fotoDodoguinhobonitinho'
                priority
            />

            {pet.name}<br></br>
            {pet.observation}
        </div>
		</>
	)
}

export default ShowPet
