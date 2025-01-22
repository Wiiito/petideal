'use server'

import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function updateOrg(id, org) {
	await dbConnect()

	const res = await OrgModel.updateOne({ _id: id }, org)

	return { success: res.acknowledged }
}
