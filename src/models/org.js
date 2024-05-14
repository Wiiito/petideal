import mongoose from 'mongoose'

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
	addressNumber: String,
	email: String,
	contactNumbers: [String],
})

const OrgModel = mongoose.models.org || mongoose.model('org', OrgSchema)
export default OrgModel
