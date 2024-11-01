'use server'

import { AuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import createPet from '@/actions/pet/create'
import { getSignedS3Url } from '@/lib/aws'
import { revalidatePath } from 'next/cache'

export default async function submitDog(data) {
	const session = await getServerSession(AuthOptions)
	if (!session.user.cnpj)
		return { success: false, status: 403, message: 'Not allowed' }

	var jsonData = {}
	data.forEach((value, key) => (jsonData[key] = value))

	// TODO: FAZ A VALIDAÇÃO DO FORM DATA AQUI PELO AMOR DE DEUS

	data.getAll('images').forEach(async (file) => {
		const resUrl = await getSignedS3Url(file)
		console.log(resUrl)
		fetch(resUrl.url, {
			body: file,
			method: 'PUT',
		}).then((res) => console.log(res))
	})

	console.log(jsonData)

	return { success: false, status: 201 }

	// try {
	// 	await createPet(data)
	// 	revalidatePath('/org/dashboard/dogs')
	// 	return { success: true }
	// } catch (error) {
	// 	console.error(error)
	// 	return { success: false, message: 'Algo deu errado, tente novamente!' }
	// }
}
