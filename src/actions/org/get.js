'use server'

import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function getOrg(cnpj) {
	await dbConnect()

	let org = await OrgModel.findOne({ cnpj })
	return org
}

export async function getOrgFromId(id) {
	await dbConnect()

	const org = await OrgModel.findById(id)
	return JSON.parse(JSON.stringify(org))
}
