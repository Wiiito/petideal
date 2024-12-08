'use server'

import { AuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

// S3 BUCKET
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export async function getSignedS3Url(file, key) {
	const session = await getServerSession(AuthOptions)
	if (!session.user._id) return { success: false, message: 'User id not found' }

	const accessKeyId = process.env.ACCESS_KEY
	const secretAccessKey = process.env.SECRET_ACCESS_KEY
	const s3BucketName = process.env.S3_BUCKET_NAME

	if (!accessKeyId || !secretAccessKey || !s3BucketName) {
		console.log('s3 credentials missing or not found')
		return { success: false, status: 500 }
	}

	const client = new S3Client({
		region: 'us-east-1',
		credentials: {
			accessKeyId,
			secretAccessKey,
		},
	})

	const command = new PutObjectCommand({
		Bucket: s3BucketName,
		Key: key,
		ContentType: file.ContentType,
	})

	const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 })

	if (signedUrl) return { success: true, url: signedUrl }

	return {
		success: false,
		status: 500,
	}
}
