import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function deletePet(name) {
    await dbConnect()

    const res = await PetModel.deleteOne({ name: name })

    return { sucess: res.acknowledged }
}
