import {model, Schema} from 'mongoose'
import {type} from 'os'

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, `Book needs a title`],
            minLength: [2, `Title must be at least 2 characters`],
            maxLength: [255, `Title cannot exceed 255 characters`]
        },

        author: {
            type: String,
            required: [true, `Author needs a name`],
            minLength: [2, `Author name must be at least 2 characters`],
            maxLength: [255, `Author name cannot exceed 255 characters`] 
        },

        pages: {
            type: Number,
            required: [true, `Book must have a number of pages`],
            min: [1, `Book must have at least one page`],
        },

        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
)

const Book = model(`Book`, BookSchema)

export default Book