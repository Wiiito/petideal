'use server'

import deletePet from '@/actions/pet/delete'
import { revalidatePath } from 'next/cache'

export default async function adoptPet(id) {
	try {
		deletePet(id)
		console.log('deletou?')
		revalidatePath('/org/dashboard/dogs')
	} catch (error) {
		console.log(err)
	}
}
