import { useQuery, useMutation } from 'react-apollo';
import { GET_AUTHORS, ADD_BOOK, BOOK_LIST } from '../queries/queries';
import { useState } from 'react';

export default function AddBook() {
    const { data: authorsData, loading: authorsLoading } = useQuery(GET_AUTHORS);
    const [ addBook ] = useMutation(ADD_BOOK);
    const [ state, setState ] = useState({
        bookName: '',
        genre: '',
        authorId: ''
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();
        addBook({
            variables: {
                name: state.bookName,
                genre: state.genre,
                authorId: state.authorId
            },
            refetchQueries: [{
                query: BOOK_LIST
            }]
        })
    }

    const authors = authorsLoading ?
        <option disabled> Authors Loading ... </option> :
        authorsData.authors.map(author => {
            return <option key={ author.id } value={ author.id }> { author.name } </option>
         })

    return (
        <form id="add-book" className="add-book" onSubmit={ submitForm }>
            <div className="field">
                <label htmlFor="book-name">Book Name:</label>
                <input
                    type="text"
                    id="book-name"
                    name="bookName"
                    value={ state.bookName }
                    onChange={ handleChange }
                />
            </div>
            <div className="field">
                <label htmlFor="genre">Genre</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={ state.genre }
                    onChange={ handleChange }
                />
            </div>
            <div className="field">
                <label htmlFor="authors">Authors</label>
                <select id="authors" name="authorId" onChange={ handleChange }>
                    <option>Select Author:</option>
                    { authors }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}