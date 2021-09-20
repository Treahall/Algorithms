const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const algorithmSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    },

    description: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

}, {
    timestamps: true,

});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = Algorithm;
