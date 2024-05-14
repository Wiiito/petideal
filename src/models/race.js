import mongoose from 'mongoose'

const RaceSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	characteristcs: [Number],
})

const RaceModel = mongoose.models.race || mongoose.model('race', RaceSchema)
export default RaceModel
