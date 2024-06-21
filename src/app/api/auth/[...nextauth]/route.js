import UserModel from '@/models/user'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const AuthOptions = {
	providers: [
		CredentialsProvider({
			async authorize(credentials, req) {
				const user = await UserModel.findOne({ email: credentials.email }) // Encontra o email do usuario

				if (!user) throw new Error('Invalid Credentials') // Usuario não encontrado

				const authenticated = await user.authenticate(credentials.password) // Autentica conforme modelo

				if (authenticated) return user // Autentucação concluida
				console.log(user)
				throw new Error('Invalid Credentials') // Senha errada
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account, profile }) {
			if (account) {
				token._id = user._id
				token.name = user.name
			}
			return token
		},

		async session({ session, token }) {
			session.user._id = token._id
			session.user.name = token.name

			return session
		},
	},
	pages: {
		signIn: '/auth/signin',
	},
}

const handler = NextAuth(AuthOptions)

export { handler as GET, handler as POST }
