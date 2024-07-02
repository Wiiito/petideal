import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'
import UserModel from '@/models/user'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const AuthOptions = {
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				await dbConnect()
				let user
				switch (
					credentials.type // Pega o usuario baseado no tipo de usuario [user, org, admin]
				) {
					case 'user':
						user = await UserModel.findOne({ email: credentials.email }) // Encontra o email do usuario
						break
					case 'org':
						user = await OrgModel.findOne({ email: credentials.email }) // Encontra o email da organização
						break
					case 'admin':
						console.log('Admin?')
						break
					default:
						throw new Error('Invalid type')
				}

				if (!user) throw new Error('Invalid Credentials') // Usuario não encontrado

				const authenticated = await user.authenticate(credentials.password) // Autentica conforme modelo

				if (authenticated) return user // Autentucação concluida

				throw new Error('Invalid Credentials') // Senha errada
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (account) {
				token._id = user._id
				if (user.cnpj) token.cnpj = user.cnpj
			}
			return token
		},

		async session({ session, token }) {
			session.user._id = token._id
			if (token.cnpj) session.cnpj = token.cnpj

			return session
		},
	},
	pages: {
		signIn: '/auth/user/signin',
	},
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }
