import dbConnect from '@/lib/dbConnect'
import RaceModel from '@/models/race'

export default async function createRace(race) {
	const { name, description, characteristcs } = race
	if (!name || !description || !characteristcs)
		return {
			success: false,
		}

	await dbConnect()

	const _race = new RaceModel({
		name: name,
		description: description,
		characteristcs: characteristcs,
	})

	_race.save()
	return _race
}
