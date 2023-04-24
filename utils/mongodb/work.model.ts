import { models, model, Schema } from 'mongoose'

const WorkSchema: Schema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    tag: {
        type: String,
        required: true,
        unique: false,
    },
    coverImage: {
        type: String,
        required: true,
    },

})

const WorkModel = models.Work || model('Work', WorkSchema)

export default WorkModel