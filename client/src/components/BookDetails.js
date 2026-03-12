import { useQuery } from "@apollo/client/react";
import { getBookQuery } from "../queries/queries";

function BookDetails ( {bookId} ){

    const { loading, error, data } = useQuery(getBookQuery, {
        variables: { id: bookId },
        skip: !bookId
    });

    if(!bookId){
        return(
            <div id="book-details">
                <p>'No Book Selected'</p>
            </div>
        ) 
    }

      if (loading) {
        return (
            <div id="book-details">
                <p>Loading book details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div id="book-details">
                <p>Error loading book.</p>
            </div>
        );
    }

    console.log("Echo" + data);

    return (
        <div id="book-details">
            <h3>{ data.book.name }:</h3>
            <p><strong>Author: </strong> { data.book.author.name }</p>
            <p><strong>Genre: </strong>{ data.book.genre }</p>
            <p>All Books By This Author:</p>
            <ul className="other-books">
                {data.book.author.books.map(b => (
                   <li key={b.id}>{ b.name }</li> 
                ))}
            </ul>
        </div>
    );
}

export default BookDetails;