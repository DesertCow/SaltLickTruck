
//
//
//

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';


//* Page Import
// import Register from './pages/Register';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import MainMenu from './pages/Main_Menu';
import SubMenu from './pages/Sub_Menu';
import Home from './pages/Home';

//* Component Import
import Header from './components/Header';
import MainFooter from './components/Footer';


// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   // link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function SubMenuPage() {
  // Get the userId param from the URL.
  let { menuID } = useParams();

  // return (
  //   <Route path="/sub_Menu/:menuID" element={<SubMenu menuID={menuID} />} />
  // );
  // ...
}

const client = new ApolloClient({
  uri: 'http://192.168.25.22:4001/graphql',
  //uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/main_Menu" element={<MainMenu />} />
          <Route path="/sub_Menu/:menuID" element={<SubMenu />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}