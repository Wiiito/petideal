'use server'

import dbConnect from '@/lib/dbConnect'
import UserModel from '@/models/user'

export default async function updateUser(email, user) {
    await dbConnect()

    const res = UserModel.updateOne({ email: email }, user)

    return res
}

export async function updateEmbedding(id, embedding) {
    await dbConnect()

    UserModel.findByIdAndUpdate(id, { perfil: embedding })
        .then()
        .catch(err => console.error('Erro ao atualizar: ' + err))
}