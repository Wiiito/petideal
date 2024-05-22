import dbConnect from '@/lib/dbConnect'
import RaceModel from '@/models/race'

export default async function updateRace(name, race) {
    await dbConnect()

    const res = RaceModel.updateOne({ name: name }, race)

    return res
}
