'use server'

import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function getUser(email) {
	await dbConnect()

	let user = await UserModel.findOne({ email: email })
	return user
}

export async function getEmbedding(id) {
	await dbConnect()
	const userEmbedding = await UserModel.findById(id, { perfil: 1, _id: 0 })

	return JSON.parse(JSON.stringify(userEmbedding))
}
