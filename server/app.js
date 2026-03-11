const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema  = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//Invoking the function to create the app
const app = express();

// Allowing Cross-Origin Requests
app.use(cors());

//Establishing a connection to mlab database
mongoose.connect('mongodb+srv://root:Swabra-1234!@gql-ninja.rn7e3vv.mongodb.net/jamie-ninja?appName=gql-ninja');
mongoose.connection.once('open', () => {
    try{
        console.log("Connected To Database");
    }catch(error){
        console.log("Couldn't Connect To The Database" + error);
    }
})

//middleware to handle graphql requests
app.use('/graphql',graphqlHTTP({
    schema,
    //using graphical
    graphiql: true
}));

// Bootstrapping the application
app.listen(4000, () => {
    console.log("App Started And Listening For Requests On Port 4000");
});