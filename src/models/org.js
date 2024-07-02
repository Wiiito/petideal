import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const OrgSchema = mongoose.Schema({
	cnpj: {
		type: String,
		required: [true, 'Plese, provide a CNPJ'],
		length: [14, 'Please, provide a valid CNPJ'],
		unique: true,
	},
	fantasyName: {
		type: String,
		required: [true, 'Please, provide a name'],
	},
	images: [String],
	addressZipCode: String,
	address: String,
	addressNumber: String,
	addressNeighborhood: String,
	addressCity: String,
	addressState: String,
	addressComplement: String,
	email: String,
	contactNumbers: [String],
	hashPassword: String,
	validated: Boolean,
})

OrgSchema.virtual('password').set(function (password) {
	this.hashPassword = bcrypt.hashSync(password, 10)
})

OrgSchema.methods = {
	authenticate: async function (password) {
		console.log(password, this.hashPassword)
		return await bcrypt.compareSync(password, this.hashPassword)
	},
}

const OrgModel = mongoose.models.org || mongoose.model('org', OrgSchema)
export default OrgModel
