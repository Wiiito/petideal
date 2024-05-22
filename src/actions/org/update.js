import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function updateOrg(cnpj, org) {
    await dbConnect()

    const res = OrgModel.updateOne({ cnpj } , org)

    return res
}
