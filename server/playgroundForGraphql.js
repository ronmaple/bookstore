// const { GraphQLServer } = require('graphql-yoga');
const express = require('express');
const app = express();

// //GraphQL SDL { Schema Definition Language }
// const typeDefs = `
//     type Query {
//         description: String
//     }
// `
// // Implementation of the API
// const resolvers = {
//     Query: {
//         description: () =>  `Graphql server application works`
//     }
// }

// const server = new GraphQLServer( {
//     typeDefs,
//     resolvers
// })

app.get('/api', (req, res) => {
    res.json({
        test: '/api'
    })
})

// port 4000 default port of graphql yoga
// server.start(() => {`Server is running on port 4000`}) 

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})