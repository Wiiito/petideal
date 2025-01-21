import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function createOrg(org) {
	const {
		cnpj,
		name,
		zipCode,
		address,
		addressNumber,
		addressNeighborhood,
		addressCity,
		addressState,
		email,
		password,
		contact,
	} = org

	if (
		!cnpj ||
		!name ||
		!zipCode ||
		!address ||
		!addressNumber ||
		!addressNeighborhood ||
		!addressCity ||
		!addressState ||
		!password ||
		!contact
	)
		return {
			success: false,
		}

	await dbConnect()

	const _org = new OrgModel({
		cnpj: cnpj,
		fantasyName: name,
		addressZipCode: zipCode,
		address: address,
		addressNumber: addressNumber,
		email: email,
		contactNumbers: contact,
		password: password,
		validated: false,
	})

	_org.save()
	return _org
}

/*
MODELO
    const org = await createOrg({
		cnpj: '99999999999999',
		name: 'Superintendência de Proteção Animal',
		zipCode: '32604496',
		address: 'Rua tal tal tal',
		addressNumber: '1840',
		email: 'sepabetim@gmail.com',
		contact: ['3135313660'],
	})
*/
