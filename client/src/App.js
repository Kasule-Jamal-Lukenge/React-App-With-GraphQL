import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

// Create link
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

// Apollo Client Setup
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Baddie List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;