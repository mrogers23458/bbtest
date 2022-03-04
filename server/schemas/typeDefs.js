const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        password: String
        notes: [Note]
    }

    type Auth {
    token: ID!
    user: User
    }

    type Note {
        _id: ID
        title: String
        note: String
        userId: ID
    }

    type Query {
        users: [User]
        user(username: String): User
        me: Auth
    }

    type Mutation {
        login(
            email: String!
            password: String!
        ): Auth
    }

`

module.exports = typeDefs