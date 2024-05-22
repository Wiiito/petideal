import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function getPet(name) {
	await dbConnect()

	let pet = await PetModel.findOne({ name: name })
	return pet
}
