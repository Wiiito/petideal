import dbConnect from '@/lib/dbConnect'
import RaceModel from '@/models/race'

export default async function deleteRace(name) {
    await dbConnect()

    const res = await RaceModel.deleteOne({ name: name })

    return { sucess: res.acknowledged }
}
