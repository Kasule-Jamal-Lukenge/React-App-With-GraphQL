const express = require('express');

const {graphqlHTTP} = require('express-graphql');

//Invoking the function to create the app
const app = express();

//middleware to handle graphql requests
app.use('/graphql',graphqlHTTP({

}));

// Bootstrapping the application
app.listen(4000, () => {
    console.log("App Started And Listening For Requests On Port 4000");
});