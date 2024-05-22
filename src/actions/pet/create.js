import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function createPet(pet) {
	const { name, orgId, images, characteristics, observation, patronize, raceId } = pet
	if (!name || !orgId || !images || !characteristics || !observation || !raceId)
		return {
			success: false,
		}

	await dbConnect()

	const _pet = new PetModel({
		name: name,
		orgId: orgId,
		images: images,
		characteristics: characteristics,
		observation: observation,
		patronize: patronize,
		raceId: raceId,
	})

	_pet.save()
	return _pet
}
