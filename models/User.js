const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true,
    },
    email: {
        type: String,
        required: 'Password is required',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    thoughts: [],
    friends: []
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
