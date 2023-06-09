import type { NextApiRequest, NextApiResponse } from 'next'

import { dbConnect } from '@/utils/mongodb/db-connect'
import WorkModel from '@/utils/mongodb/work.model'

import { IWork } from '@/@types/work'



type Data = {
    works?: IWork[]
    work?: IWork
    message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if (req.method === 'POST') {
        try {
            dbConnect();
            const { title, tag, coverImage } = req.body
            console.log('api-post' , req.body);
            const work = await WorkModel.create({ title, tag, coverImage })
            // @ts-ignore
            res.status(201).json({ success: true, data: work })
        } catch (error) {
            console.error('api-post-error ',error)
            // @ts-ignore
            res.status(400).json({ success: false, message: 'Error creating new work item' })
        }
    }

    if (req.method === 'GET') {
        try {
            dbConnect()
            const works = await WorkModel.find({})
            return res.status(200).json({ works, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export default handler
