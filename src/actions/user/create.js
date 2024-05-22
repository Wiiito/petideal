import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function createUser(user) {
	const { name, email, hashPassword, perfil } = user
	if ( !name || !email || !hashPassword || !perfil)
		return {
			success: false,
		}

	await dbConnect()

	const _user = new UserModel({
		name: name,
		email: email,
		hashPassword: hashPassword,
		perfil: perfil,
	})

	_user.save()
	return _user
}
