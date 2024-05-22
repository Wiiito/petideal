import dbConnect from '@/lib/dbConnect'
import PetModel from '@/models/pet'

export default async function updatePet(name, pet) {
    await dbConnect()

    const res = PetModel.updateOne({ name: name }, pet)

    return res
}
