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
            required: true,
        },
        releaseYear: {
            type: Number,
            required: true,
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

// define virtuals below (optional)
// add virtual to define if a sneaker is considered vintage
sneakerSchema.virtual('isVintage').get(function () {
    const currentYear = new Date().getFullYear()
    if (this.releaseYear <= currentYear - 40) {
        return "VINTAGE"
    }
})

module.exports = mongoose.model('Sneaker', sneakerSchema)
