import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function deleteUser(email) {
    await dbConnect()

    const res = await UserModel.deleteOne({ email: email })

    return { sucess: res.acknowledged }
}
