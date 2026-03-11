import React, { Component } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const getBooksQuery = gql`
{
    books{
        name,
        genre
    }
}
`;


function BookList() {

    const { loading, error, data } = useQuery(getBooksQuery);

    if(loading){
        return "Fetching Books. Please Wait!!!";
    }
    if(error){
        return "Oops!!! Something Went Wrong.";
    }

    return (
        <div>
            <ul id="book-list">
                {data.books.map(book => (
                    <li key={book.name}>
                        {book.name}<br/>
                        {book.genre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;