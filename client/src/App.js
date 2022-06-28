import BookList from './components/book-list';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import AddBook from "./components/add-book";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
      <ApolloProvider client={client}>
          <div id="main" className="main">
              <h1>Ninja reading list:</h1>
              <BookList/>
              <AddBook/>
          </div>
      </ApolloProvider>
  );
}

export default App;
