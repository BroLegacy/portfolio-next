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
            const { title, seo, slug, description, coverImage } = req.body
            const work = await WorkModel.create({ title, seo, slug, description, coverImage })
            res.status(201).json({ success: true, data: work })
        } catch (error) {
            console.error(error)
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

    if (req.method === 'PUT') {
        try {
            dbConnect()
            const { id, title, seo, slug, description, coverImage } = req.body
            const updatedWork = await WorkModel.findByIdAndUpdate(
                id,
                { title, seo, slug, description, coverImage },
                { new: true }
            )
            if (!updatedWork) {
                return res.status(404).json({ message: 'Work not found' })
            }
            return res.status(200).json({ success: true, data: updatedWork })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    if (req.method === 'DELETE') {
        try {
            dbConnect()
            const { id } = req.body
            const deletedWork = await WorkModel.findByIdAndDelete(id)
            if (!deletedWork) {
                return res.status(404).json({ message: 'Work not found' })
            }
            return res.status(200).json({ success: true, data: deletedWork })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }

    if (req.method === 'GET') {
        try {
            dbConnect()
            const { _id } = req.query
            const work = await WorkModel.findById(_id)
            if (!work) {
                return res.status(404).json({ message: 'Work not found' })
            }
            return res.status(200).json({ work, message: 'OK' })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Internal server error' })
        }
    }
}

export default handler
