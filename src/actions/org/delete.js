import dbConnect from '@/lib/dbConnect'
import OrgModel from '@/models/org'

export default async function deleteOrg(cnpj) {
    await dbConnect()

    const res = await OrgModel.deleteOne({ cnpj })

    return { sucess: res.acknowledged }
}
