const mongoose = require('mongoose')

const WellFormSchema = new mongoose.Schema({
    wellName: {
        type: String,
        required: true
    },
    dateSampled: {
        type: Date,
        required: true
    },
    fieldStaff: {
        type: String,
        required: true
    },
    sampler: {
        type: String,
        required: true
    },
    swl: {
        type: Number,
        required: true
    },
    correction: {
        type: Number,
        required: true
    },
    cSWL: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('SampleEvent', WellFormSchema, 'sample-events') //take bluprint we created, package it up, reference name, schema, and collection. This is the order of what things are called.