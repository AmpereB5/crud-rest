const mongoose = require('mongoose');
const pasSchema = mongoose.Schema({
    ime: {
        type: String,
        required: true
    },

    vrsta: {
        type: String,
        required: true
    },

    spol: {
        type: String,
        required: true
    },

    dob: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('posts', pasSchema);