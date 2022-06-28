const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

mongoose.connect('mongodb+srv://:@cluster0.n7irjza.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to db');
})
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for request on port 4000')
});