import { useQuery } from "@apollo/client/react";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {

    const [selected, setSelected] = useState("");

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
                    <li key={book.id} onClick={() => {
                        console.log("Clicked Book "+ book.id);
                        setSelected(book.id)
                    }}>
                        {book.name}
                    </li>
                ))}
            </ul>
            <BookDetails bookId={ selected }/>
        </div>
    );
}

export default BookList;