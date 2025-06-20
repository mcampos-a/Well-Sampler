const mongoose = require('mongoose')

const WellListSchema = new mongoose.Schema({
    wellName: {
        type: String,
        required: true,
    },
    swl: {
        type: Number,
        required: true,
    },
    correction: {
        type: Number,
        required: true,
    },
    cSWL: {
        type: Number,
        default: 0.00,
    },
    dateEntered: {
        type: Date,
        default: Date.now(),
    },
    dateConstructed: {
        type: Date,
        required: true,
    },
    wellDepth: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('WellList', WellListSchema, 'wells') //take bluprint created, package it up, reference name, schema, and collection. This is the order of what things are called.