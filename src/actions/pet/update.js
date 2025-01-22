'use server'

import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'
import { revalidatePath } from 'next/cache'

export default async function updatePet(id, pet) {
	try {
		await dbConnect()
		await PetModel.updateOne({ _id: id }, pet)
		revalidatePath('/org/dashboard/dogs')
		return { success: true, status: 201 }
	} catch (error) {
		console.error('Erro ao cadastrar animal:' + error)
		return {
			success: false,
			status: 500,
			message: 'Algo deu errado, tente novamente!',
		}
	}
}
