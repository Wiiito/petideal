import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function createOrg(org) {
	const { cnpj, name, images, zipCode, addressNumber, email, contact } = org
	if (!cnpj || !name || !images || !zipCode || !addressNumber || !contact)
		return {
			success: false,
		}

	await dbConnect()

	const _org = new OrgModel({
		cnpj: cnpj,
		fantasyName: name,
		images: images,
		addressZipCode: zipCode,
		addressNumber: addressNumber,
		email: email,
		contactNumbers: contact,
	})

	_org.save()
	return _org
}

/*
MODELO
    const org = await createOrg({
		cnpj: '99999999999999',
		name: 'Superintendência de Proteção Animal',
		images: ['link1', 'link2'],
		zipCode: '32604496',
		addressNumber: '1840',
		email: 'sepabetim@gmail.com',
		contact: ['3135313660'],
	})
*/
