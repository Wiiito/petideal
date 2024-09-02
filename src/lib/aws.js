'use server'

import { AuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

// S3 BUCKET

export async function getSignedS3Url() {
	const session = await getServerSession(AuthOptions)

	if (!session.user._id) {
		return { success: false, message: 'User id not found' }
	}
}
