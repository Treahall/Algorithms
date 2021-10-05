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

    best_case: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 4
    },

    average_case: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 4
    },

    worst_case: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 4
    },

}, {
    timestamps: true,

});

const Algorithm = mongoose.model('Algorithm', algorithmSchema);

module.exports = Algorithm;
