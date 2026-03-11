import { useQuery } from "@apollo/client/react";
import { GET_AUTHORS } from "../queries/queries";

function AddBook(){
    const { loading, error, data } = useQuery(GET_AUTHORS);

    if(loading) return "Please Wait For A While....";
    if (error) return "Oops!!! Something Went Wrong...";

    return(
        <form>
            <div className="field">
                <label htmlFor="">Book Title:</label>
                <input type="text" name="" id="" />
            </div>

            <div className="field">
                <label htmlFor="">Genre:</label>
                <input type="text" name="" id="" />
            </div>

            <div className="field">
                <label htmlFor="">Author:</label>
                <select>
                    <option>---Select An Author---</option>
                    {data.authors.map(author =>( 
                        <option value={ author.id } key={ author.id }>{ author.name }</option>
                    ))}
                </select>
            </div>

            <button>+</button>

        </form>
    );
}

export default AddBook;
