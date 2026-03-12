import { gql } from "@apollo/client";

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
        genre,
        id
    }
}
`;

const getBookQuery = gql`
    query($id: ID){
        book(id: $id){
            id,
            name,
            genre,
            author{
                id,
                name,
                age,
                books{
                    name,
                    id
                }
            }
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

export {GET_AUTHORS, getBooksQuery, addBookMutation, getBookQuery};
