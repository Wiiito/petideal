'use server'

import dbConnect from '@/lib/dbConnect'
import RaceModel from '@/models/race'

export async function getRaceFromId(id) {
	await dbConnect()

	let race = await RaceModel.findById(id)
	return JSON.parse(JSON.stringify(race))
}

export async function getAllRacesNames() {
	await dbConnect()

	let races = await RaceModel.find().select('name')
	return JSON.parse(JSON.stringify({ races }))
}

export async function getRaceBaseEmbedding(raceId) {
	await dbConnect()

	const raceEmbedding = await RaceModel.findById(raceId).select('embedding')

	return JSON.parse(JSON.stringify(raceEmbedding))
}
