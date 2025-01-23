'use server'

import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function getPet(id) {
	await dbConnect()
	let pet = await PetModel.findById(id)
	return JSON.parse(JSON.stringify(pet))
}

export async function getAllPagesOfAOrg(orgId) {
	await dbConnect()
	let pets = await PetModel.find({ orgId }).sort({ name: 'asc' })
	return JSON.parse(JSON.stringify(pets))
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

export async function getFromAllPageOfPets(page, perPage) {
	if (!perPage) perPage = 12
	await dbConnect()
	let pets = await PetModel.find()
		.limit(perPage)
		.skip(perPage * (page - 1))
		.sort({ name: 'asc' })

	return JSON.parse(JSON.stringify(pets))
}

export async function getPetCount() {
	await dbConnect()
	const size = await PetModel.countDocuments()

	return size
}

export async function vectorSearch(embeddingSearch, perPage, page) {
	if (!perPage) perPage = 12
	if (!page) page = 1

	const skip = (page - 1) * perPage

	await dbConnect()
	const res = await PetModel.aggregate([
		{
			$vectorSearch: {
				index: 'vectorIndex', // indicate the index we goin to use for our search
				path: 'embedding', // indicate the field the vectors are stored
				queryVector: embeddingSearch,
				numCandidates: 100, // number of chunks to consider for the comparison
				limit: perPage * page, // the number of returned results on score order from high to low
			},
		},
		{ $skip: skip },
		{
			$project: {
				_id: 1,
				name: 1,
				images: 1,
				description: 1,
				orgId: 1,
				raceId: 1,
				observation: 1,
				gender: 1,
				age: 1,
				score: {
					$meta: 'vectorSearchScore',
				},
			},
		},
	])

	Array.from(res).map((dog) => {
		dog._id = dog._id.toString()
	})

	return res
}
