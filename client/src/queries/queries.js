import { gql } from "apollo-boost";

const GET_AUTHORS = gql`
    {
        authors {
            name
            id
        }
    }
`

const BOOK_LIST = gql`
    {
        books {
            name
            id
        }
    }
`

const ADD_BOOK = gql`
    mutation($name:String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`

export {GET_AUTHORS, BOOK_LIST, ADD_BOOK };