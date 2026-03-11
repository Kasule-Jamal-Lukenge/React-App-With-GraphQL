import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client/react";
import { addBookMutation, GET_AUTHORS, getBooksQuery } from "../queries/queries";

function AddBook(){

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");

    const { loading, error, data } = useQuery(GET_AUTHORS);
    const [addBook] = useMutation(addBookMutation);

    const handleSubmit = (e) => {

        e.preventDefault();

        addBook({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        })
    }

    if(loading) return "Please Wait For A While....";
    if (error) return "Oops!!! Something Went Wrong...";

    return(
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Title:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Author:</label>
                <select
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                >
                    <option>---Select An Author---</option>
                    {data?.authors.map(author =>(
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">+</button>

        </form>
    );
}

export default AddBook;