import { useQuery } from 'react-apollo';
import { BOOK_LIST } from '../queries/queries';

export default function BookList() {
    const { loading, data } = useQuery(BOOK_LIST);
    let books;

    if (loading) {
        books = <div>Loading ...</div>
    } else {
        books = data.books.map((book, index) => {
            return <li key={index}>{book.name}</li>
        })
    }

    return (
        <ul id="book-list" className="book-list" >
            {books}
        </ul>
    );
}

