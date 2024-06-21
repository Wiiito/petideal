'use server'

import createUser from '@/actions/user/create'
import { z } from 'zod'

// Schema do usuario usado na validação dos dados inseridos no formulario
const userSchema = z
	.object({
		name: z.string({}).min(2, { message: 'Insira um nome' }),
		email: z.string({}).min(1, { message: 'Insira um email' }).email({
			message: 'Email Invalido',
		}),
		repeatEmail: z.string().min(1, { message: 'Repita o email' }),
		password: z.string().min(1, { message: 'Insira uma senha' }),
		repeatPassword: z.string().min(1, { message: 'Repita sua senha' }),
	})
	.refine(d => d.email === d.repeatEmail, {
		path: ['email', 'repeatEmail'],
		message: 'Emails devem ser iguais',
	})
	.refine(d => d.password === d.repeatPassword, {
		path: ['password', 'repeatPassword'],
		message: 'Senhas devem ser iguais',
	})

export default async function handleSubmit(prevState, data) {
	const user = {
		name: data.get('name'),
		email: data.get('email'),
		repeatEmail: data.get('repeatEmail'),
		password: data.get('password'),
		repeatPassword: data.get('repeatPassword'),
	}

	const validatedFields = userSchema.safeParse(user)

	if (!validatedFields.success) {
		return validatedFields.error.flatten().fieldErrors
	}

	const _user = createUser({
		name: user.name,
		email: user.email,
		password: user.password,
		perfil: [],
	})

	if (!_user) return { message: 'Algo deu errado, tente novamente' }

	return { user }
}
