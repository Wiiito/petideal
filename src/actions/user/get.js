import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function getUser(email) {
	await dbConnect()

	let user = await UserModel.findOne({ email: email })
	return user
}
