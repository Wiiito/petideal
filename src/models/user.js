import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name'],
		min: 3,
	},
	email: {
		type: String,
		required: [true, 'Please provide a email'],
	},
	hashPassword: {
		type: String,
		required: [true, 'Please provide a password'],
	},
	perfil: [Number], // Tabela perfil de usuario é substituida por um array
})

userSchema.virtual('password').set(function (password) {
	this.hashPassword = bcrypt.hashSync(password, 10)
})

userSchema.methods = {
	authenticate: async function (password) {
		return await bcrypt.compareSync(password, this.hashPassword)
	},
}

const UserModel = mongoose.models.user || mongoose.model('user', UserSchema)
export default UserModel
