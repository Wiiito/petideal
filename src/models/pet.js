import mongoose from 'mongoose'

const PetSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	orgId: {
		type: String,
		required: true,
	},
	images: [String],
	description: String,
	characteristics: [Number], // Tabela caracteristicas do pet é substituida por um array
	observation: [String],
	patronize: Boolean,
	raceId: String, // Referencia o modelo da raca
})

const PetModel = mongoose.models.pet || mongoose.model('pet', PetSchema)
export default PetModel
