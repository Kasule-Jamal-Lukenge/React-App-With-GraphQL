const graphql = require('graphql');
const _ = require('lodash');

// Getting properties from the graphql package
const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema ,
    GraphQLID,
    GraphQLInt
} = graphql;

// Dummy data 
var books = [
    { name: "House Of The Dragon", genre: 'Fantasy', id: '1'},
    { name: 'Game Of Thrones', genre: 'Fantasy', id: '2'},
    { name: 'A Knight Of The Seven Kingdoms', genre: 'Fantasy', id: '3'},
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '4'},
];

var authors = [
    { name: 'Kasule Jamal Lukenge', age: 27, id: '1' },
    { name: 'Naiga Shamira', age: 25, id: '2' },
    { name: 'Nantege Patricia', age: 27, id: '3' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //querying for a particular book
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                args.id;
                // code to get the data from the database or other source
                console.log(typeof(args.id));
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return _.find(authors, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // specifying the query users use to query data from the frontend
    query: RootQuery
});