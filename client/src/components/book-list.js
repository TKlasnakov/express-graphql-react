import { useQuery } from 'react-apollo';
import { BOOK_LIST } from '../queries/queries';
import BookDetails from './book-details';
import { useState } from 'react';

export default function BookList() {
    const { loading, data } = useQuery(BOOK_LIST);
    const [bookId, setBookId] = useState()
    let books;


    function handleBookClick(id) {
        setBookId(id);
    }

    if (loading) {
        books = <div>Loading ...</div>
    } else {
        books = data.books.map((book, index) => {
            return(
                <li
                    onClick={ () => handleBookClick(book.id) }
                    key={ index }>
                    { book.name }
                </li>
            )
        })
    }

    return (
        <div>
            <ul id="book-list" className="book-list" >
                {books}
            </ul>
            <BookDetails bookId={ bookId } />
        </div>
    );
}

