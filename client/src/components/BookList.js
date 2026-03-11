import { useQuery } from "@apollo/client/react";
import { getBooksQuery } from "../queries/queries";

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
                        {book.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;