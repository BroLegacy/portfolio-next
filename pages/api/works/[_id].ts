import type { NextApiRequest, NextApiResponse } from 'next'

import { dbConnect } from '@/utils/mongodb/db-connect'
import WorkModel from '@/utils/mongodb/work.model'

import { IWork } from '@/@types/work'

type Data = {
    work?: IWork
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const {
        query: { _id },
        method,
        body,
    } = req

    try {
        dbConnect()
        const work = await WorkModel.findById(_id)

        switch (method) {
            case 'GET':
                if (!work) {
                    return res.status(404).json({ message: `Work with id ${_id} not found` })
                }
                return res.status(200).json({ work, message: 'OK' })

            case 'PUT':
                if (!work) {
                    return res.status(404).json({ message: `Work with id ${_id} not found` })
                }
                const updatedWork = await WorkModel.findByIdAndUpdate(_id, body, {
                    new: true,
                    runValidators: true,
                })
                return res.status(200).json({ work: updatedWork, message: 'Work updated' })

            case 'DELETE':
                if (!work) {
                    return res.status(404).json({ message: `Work with id ${_id} not found` })
                }
                await WorkModel.findByIdAndRemove(_id)
                return res.status(200).json({ message: 'Work deleted' })

            default:
                return res.status(405).json({ message: 'Method Not Allowed' })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}