'use server'

import createPet from '@/actions/pet/create'
import { z } from 'zod'

const dog = z.object({
	orgId: z.string().length(14, { message: 'Insira um CNPJ valido' }),
	name: z.string().min(1, { message: 'Insira um nome' }),
	description: z.string(),
	patronize: z.boolean(),
	observation: z.string(),
})

export default async function submitDog(data) {
	const validate = dog.safeParse(data)

	if (!validate.success)
		return { success: false, error: validate.error.flatten().fieldErrors }

	try {
		const res = await createPet(data)
		console.log('abla')
		return { success: true }
	} catch (error) {
		console.error(error)
		return { success: false, message: 'Algo deu errado, tente novamente!' }
	}
}
