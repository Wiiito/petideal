import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function updateUser(email, user) {
    await dbConnect()

    const res = UserModel.updateOne({ email: email }, user)

    return res
}
