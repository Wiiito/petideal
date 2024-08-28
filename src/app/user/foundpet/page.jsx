'use client'

import FoundHeader from '@/components/foundHeader/foundHeader'
import ShowPet from '@/components/showPet/showPet'
import dbQuery from '@/lib/dbQuery'

//const dogs = dbQuery('PetSchema', {});

//const dogs = new Array({ name: 'Jorginho', observation: 'baunceiro' }, { name: 'Jorginho', observation: 'baunceiro' }) 

const FoundPet = () => {
	const dogs = async () => {
		return await dbQuery('PetSchema', {})
	}

	return (
		<div className='flex flex-col'>
			<div className='h-28' >
				<FoundHeader />
			</div>

			<div className='h-full'>
				<nav className='flex flex-col space-y-8 h-full w-1/2 md:block lg:absolute lg:-translate-x-1/2 lg:left-1/2'>

					<ShowPet pet={{ name: 'Jorginho', observation: 'baunceiro' }} />
					<ShowPet pet={{ name: 'Aline', observation: 'comilona' }} />


					{
						Array.from(dogs).map((dog, index) => {
							return (
								<ShowPet pet={dog} />
							)
						})
					}
				</nav>
			</div>
		</div>
	)
}

export default FoundPet