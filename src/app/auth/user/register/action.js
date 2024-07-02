'use server'

import createUser from '@/actions/user/create'
import { z } from 'zod'

// Schema do usuario usado na validação dos dados inseridos no formulario
const userSchema = z
	.object({
		name: z.string().min(2, { message: 'Insira um nome' }),
		email: z.string().min(1, { message: 'Insira um email' }).email({
			message: 'Email Invalido',
		}),
		repeatEmail: z.string().min(1, { message: 'Repita o email' }),
		password: z
			.string()
			.min(1, { message: 'Insira uma senha' })
			.min(8, { message: 'Senha deve conter no minimo 8 caracteres' }),
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
	.refine(d => d.password.match(/[a-z]/g), {
		path: ['password'],
		message: 'Senha deve conter minúsculas',
	})
	.refine(d => d.password.match(/[A-Z]/g), {
		path: ['password'],
		message: 'Senha deve conter maiúsculas',
	})
	.refine(d => d.password.match(/[0-9]/g), {
		path: ['password'],
		message: 'Senha deve conter números',
	})
	.refine(d => d.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g), {
		path: ['password'],
		message: 'Senha deve conter caracteres especiais',
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

	try {
		createUser({
			name: user.name,
			email: user.email,
			password: user.password,
			perfil: [],
		})
	} catch (error) {
		return { message: 'Algo deu errado. Error: ' + error }
	}

	return { user }
}
