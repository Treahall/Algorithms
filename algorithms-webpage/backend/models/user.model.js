const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    insertionFile: {
      type: Array,
      required: false,
      unique: false,
      trim: false,
    },

    mergeFile: {
      type: Array,
      required: false,
      unique: false,
      trim: false,
    },

    bubbleFile: {
      type: Array,
      required: false,
      unique: false,
      trim: false,
    },

    quickFile: {
      type: Array,
      required: false,
      unique: false,
      trim: false,
    },


}, {
    timestamps: true,

});

const User = mongoose.model('User', userSchema);

module.exports = User;
