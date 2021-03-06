const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const db = require ('./config/connection')
const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')
const path = require('path')

async function startServer(typeDefs, resolvers){

    const PORT = process.env.PORT || 3001;
    const app = express()

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })

    await server.start()
    server.applyMiddleware({ app })

    app.use(express.urlencoded({ extended: false}))
    app.use(express.json())

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/build')))
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/build/index.html'))
        })
    }

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}`)
            console.log(`use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        })
    })


}

startServer(typeDefs, resolvers);