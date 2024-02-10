const mongoose = require('mongoose')

const sneakerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
        colorway: {
            type: String,
        },
        releaseYear: {
            type: Number,
        },
        // imageLink: {
        //     type: String,
        // },
        condition: {
            type: String,
            enum: ['mint', 'used', 'beaters'],
            required: true,
            default: 'mint', 
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Sneaker', sneakerSchema)
