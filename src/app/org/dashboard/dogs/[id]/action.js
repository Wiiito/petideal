'use server'

import updatePet from '@/actions/pet/update'

export default async function updateDog(pet) {
	var jsonValues = {}
	pet.forEach(function (value, key) {
		jsonValues[key] = value
	})
	jsonValues.embedding = jsonValues.embedding.split(',').map((num) => {
		return Number(num)
	})

	return await updatePet(pet.get('_id'), jsonValues)
}
