import { GET_BOOK } from '../queries/queries';
import { useQuery } from 'react-apollo';

export default function BookDetails ({ bookId }) {
    const { data } = useQuery(GET_BOOK, {
        variables: { id: bookId }
    });

    function displayBookDetails() {
        if(!data?.book) {
            return <div>No Book Selected ...</div>
        }
        const { book } = data;

        if(book) {
            return (
                <div>
                    <h2>{ book.name }</h2>
                    <p>{ book.genre }</p>
                    <p>{ book.author.name }</p>
                    <p>All books by this author:</p>
                    <ul className="otherBooks">
                        {book.author.books.map((book) => {
                            return (
                                <li key={book.id}>{book.name}</li>
                            )
                        })}
                    </ul>

                </div>
            )
        }
    }

    return (
        <div id="book-details" className="book-details">
            { displayBookDetails() }
        </div>
    )
}