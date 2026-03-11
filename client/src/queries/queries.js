import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client/react';

const GET_AUTHORS = gql`
{
    authors{
        name,
        age,
        id
    }
}
`;

const getBooksQuery = gql`
{
    books{
        name,
        genre
    }
}
`;


const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export {GET_AUTHORS, getBooksQuery, addBookMutation};
