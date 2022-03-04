const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User')
const { signToken } = require('../utils/auth.js')
const resolvers = {
    Query: {
        users: async () => {
            const users = User.find()
            return users
        },

        user: async(parent, {id} ) => {
            const user = User.findOne({ _id: id })
            return user
        }
    },

    Mutation: {

        login: async (parent, {email, password}) => {
            console.log(email, password)
            const user = await User.findOne({ email: email});
            console.log(user)
            if (!user) {
                throw new AuthenticationError('No account with this e-mail found')
                
            }

            console.log(password)
            const checkPass = await user.isCorrectPassword(password)

            if (!checkPass) {
                throw new AuthenticationError('Incorrect Password test test test')
            }

            const token = signToken(user)
            return { token, user }
        }
    }
}

module.exports = resolvers