import dbConnect from '@/lib/dbConnect'
import RaceModel from '@/models/race'

export default async function getRace(name) {
	await dbConnect()

	let race = await RaceModel.findOne({ name: name })
	return race
}

export async function getAllRacesNames() {
	await dbConnect()

	let races = await RaceModel.find().select('name')
	return JSON.parse(JSON.stringify({races}))
}