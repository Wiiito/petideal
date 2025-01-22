'use server'

import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function createPet(pet) {
	const {
		age,
		name,
		orgId,
		gender,
		images,
		embedding,
		patronize,
		description,
		observation,
		raceId,
	} = pet
	if (!age || !gender || !name || !orgId || !images || !embedding || !raceId)
		return {
			success: false,
		}

	await dbConnect()

	const _pet = new PetModel({
		age: age,
		name: name,
		orgId: orgId,
		images: images,
		gender: gender,
		embedding: embedding,
		observation: observation,
		description: description,
		patronize: patronize,
		raceId: raceId,
	})

	_pet.save()
	return _pet
}
