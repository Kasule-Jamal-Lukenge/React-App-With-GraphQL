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

export {GET_AUTHORS, getBooksQuery};
