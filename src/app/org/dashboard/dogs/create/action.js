'use server'

import createPet from '@/actions/pet/create'
import { getSignedS3Url } from '@/lib/aws'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const dog = z.object({
	orgId: z.string().min(1, { message: 'Insira um ID' }),
	name: z.string().min(1, { message: 'Insira um nome' }),
	description: z.string(),
	patronize: z.boolean(),
	observation: z.string().array(),
	images: z.any().array(),
})

export default async function submitDog(data) {
	// const validate = dog.safeParse(data)

	// if (!validate.success)
	// 	return { success: false, error: validate.error.flatten().fieldErrors }

	const resUrl = await getSignedS3Url()
	console.log(resUrl)

	return { success: false }

	// try {
	// 	await createPet(data)
	// 	revalidatePath('/org/dashboard/dogs')
	// 	return { success: true }
	// } catch (error) {
	// 	console.error(error)
	// 	return { success: false, message: 'Algo deu errado, tente novamente!' }
	// }
}
