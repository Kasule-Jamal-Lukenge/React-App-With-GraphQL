const graphql = require('graphql');

// Getting properties from the graphql package
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // specifying the query users use to query data from the frontend
    query: RootQuery
});