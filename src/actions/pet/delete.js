'use server'

import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function deletePet(id) {
	await dbConnect()

	const res = await PetModel.deleteOne({ _id: id })
	return { sucess: res.acknowledged }
}
