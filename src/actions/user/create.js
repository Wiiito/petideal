'use server'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function createUser(user) {
	const { name, email, password, perfil } = user
	if (!name || !email || !password || !perfil)
		return {
			success: false,
		}

	await dbConnect()

	const _user = new UserModel({
		name: name,
		email: email,
		password: password,
		perfil: perfil,
	})

	_user.save()

	return _user
}
