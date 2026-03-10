const graphql = require('graphql');
const_ = require('lodash');

// Getting properties from the graphql package
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data 
var books = [
    { name: "House Of The Dragon", genre: 'Fantasy', id: '1'},
    { name: 'Game Of Thrones', genre: 'Fantasy', id: '2'},
    { name: 'A Knight Of The Seven Kingdoms', genre: 'Fantasy', id: '3'},
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '4'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //querying for a particular book
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args){
                args.id;
                // code to get the data from the database or other source
                return _.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // specifying the query users use to query data from the frontend
    query: RootQuery
});