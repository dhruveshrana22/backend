// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    dropdownValue: {
        type: [String],

    },

    dropdownOptions: {
        type: [String],

    },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
