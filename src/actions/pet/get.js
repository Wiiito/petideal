'use server'

import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function getPet(name) {
	await dbConnect()
	let pet = await PetModel.findOne({ name: name })
	return pet
}

export async function getPageOfPets(orgId, page, perPage) {
	if (!perPage) perPage = 12
	await dbConnect()
	let pets = await PetModel.find({ orgId })
		.limit(perPage)
		.skip(perPage * (page - 1))
		.sort({ name: 'asc' })

	return JSON.parse(JSON.stringify(pets))
}

export async function getAllPets() {
	let pets = await PetModel.find({}).sort({ name: 'asc' })
	return JSON.parse(JSON.stringify(pets))
}
