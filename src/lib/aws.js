'use server'

import { AuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

// S3 BUCKET

export async function getSignedS3Url() {
	let session = await getServerSession(AuthOptions)

	if (!session.user.cnpj) {
		return { success: false, message: 'Not logged in as organization' }
	}

	return { success: { url: '' } }
}
