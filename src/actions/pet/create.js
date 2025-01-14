import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function createPet(pet) {
	const {
		name,
		orgId,
		images,
		embedding,
		patronize,
		description,
		observation,
		raceId,
	} = pet
	if (!name || !orgId || !images || !embedding || !raceId)
		return {
			success: false,
		}

	await dbConnect()

	const _pet = new PetModel({
		name: name,
		orgId: orgId,
		images: images,
		embedding: embedding,
		observation: observation,
		description: description,
		patronize: patronize,
		raceId: raceId,
	})

	_pet.save()
	return _pet
}
