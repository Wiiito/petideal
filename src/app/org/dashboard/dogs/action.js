'use server'

import updateOrg from '@/actions/org/update'
import { revalidatePath } from 'next/cache'

export default async function updateOrganization(id, org) {
	try {
		var jsonValues = {}
		org.forEach(function (value, key) {
			jsonValues[key] = value
		})

		const orgRes = await updateOrg(id, jsonValues)
		revalidatePath('/org/dashboard/dogs')
		if (orgRes.success) {
			return {
				success: true,
				status: 200,
			}
		}
	} catch (error) {
		return {
			success: false,
			status: 500,
		}
	}
}
