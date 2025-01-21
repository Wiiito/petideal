'use server'

import createOrg from '@/actions/org/create'
import { z } from 'zod'

const orgSchema = z
	.object({
		cnpj: z.string().length(14, { message: 'Insira um CNPJ valido' }),
		name: z.string().min(1, { message: 'Insira o nome' }),
		zipCode: z.string().length(8, { message: 'Insira um CEP valido' }),
		address: z.string().min(1, { message: 'Insira um Endereço' }),
		addressNumber: z
			.string()
			.min(1, { message: 'Insira o número do endereço' }),
		addressNeighborhood: z.string().min(1, { message: 'Insira o bairro' }),
		addressCity: z.string().min(1, { message: 'Insira a cidade' }),
		addressState: z.string().min(1, { message: 'Insira o estado' }),
		addressComplement: z.string(),
		email: z.string().email({ message: 'Insira um email valido' }),
		contact: z
			.string()
			.array()
			.nonempty({ message: 'Insira pelo menos um telefone de contato' }),
		password: z
			.string()
			.min(1, { message: 'Insira uma senha' })
			.min(8, { message: 'Senha deve conter no minimo 8 caracteres' }),
	})
	.refine((d) => d.password.match(/[a-z]/g), {
		path: ['password'],
		message: 'Senha deve conter minúsculas',
	})
	.refine((d) => d.password.match(/[A-Z]/g), {
		path: ['password'],
		message: 'Senha deve conter maiúsculas',
	})
	.refine((d) => d.password.match(/[0-9]/g), {
		path: ['password'],
		message: 'Senha deve conter números',
	})
	.refine((d) => d.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g), {
		path: ['password'],
		message: 'Senha deve conter caracteres especiais',
	})

const submitOrg = async (data) => {
	const validate = orgSchema.safeParse(data)

	if (!validate.success) {
		return { success: false, error: validate.error.flatten().fieldErrors }
	}

	try {
		await createOrg(data)
		return { success: true }
	} catch (error) {
		return { success: false, message: 'Algo deu errado, tente novamente!' }
	}
}

export default submitOrg
