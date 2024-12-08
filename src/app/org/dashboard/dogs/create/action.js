'use server'

import { AuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import createPet from '@/actions/pet/create'
import { getSignedS3Url } from '@/lib/aws'
import { revalidatePath } from 'next/cache'
import { v4 as uuidv4 } from 'uuid'

export default async function submitDog(data) {
	const session = await getServerSession(AuthOptions)
	if (!session.user.cnpj)
		return { success: false, status: 403, message: 'Not allowed' }

	var jsonData = {}
	data.forEach((value, key) => (jsonData[key] = value))
	jsonData.observation = data.getAll('observation') // Recebe o array de observações e adiciona ao json

	// TODO: FAZ A VALIDAÇÃO DO FORM DATA AQUI PELO AMOR DE DEUS
	/*
	O codigo abaixo é responsavel por ler todas a imagens no formulario,
	upa-las pro servidor s3 e salvar seu uuid no array de imagens que será
	upado para a database
	*/

	jsonData.images = []
	data.getAll('images').forEach(async (file) => {
		const key = uuidv4()
		jsonData.images.push(key) // Estaria dentro do then, porém o codigo assincrono que cadastra o animal na db roda antes do resultado do fetch...
		const resUrl = await getSignedS3Url(file, key)
		if (resUrl.success) {
			fetch(resUrl.url, {
				body: file,
				method: 'PUT',
			})
				.then()
				.catch((err) => {
					console.log('Erro upando imagem para a database: ' + err)
					return {
						success: false,
						status: 500,
						message: 'Something went worng while uploading photo',
					}
				})
		}
	})

	jsonData.embedding = jsonData.embedding.split(',').map((num) => {
		return Number(num)
	})

	try {
		await createPet(jsonData)
		revalidatePath('/org/dashboard/dogs')
		return { success: true, status: 201 }
	} catch (error) {
		console.error('Erro ao cadastrar animal:' + error)
		return {
			success: false,
			status: 500,
			message: 'Algo deu errado, tente novamente!',
		}
	}
}
