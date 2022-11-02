
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
import ItemMenu from './components/MenuItemScreen';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import OrderSubmit from './pages/OrderSubmit';
import Kitchen from './pages/Kitchen';

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

import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://192.168.25.2:3002');
const socket = socketIO.connect('http://localhost:3000');

socket.on("hello", (arg) => {
  console.log(arg); // world
});

function SubMenuPage() {

  //* Get the userId param from the URL.
  let { menuID } = useParams();

}

const client = new ApolloClient({
  uri: 'http://192.168.25.22:4001/graphql',
  // uri: 'https://saltlicktruck.herokuapp.com/graphql',
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
          <Route path="/item/:menuItem" element={<ItemMenu />} />
          <Route path="/user/cart" element={<Cart />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/orderSubmit" element={<OrderSubmit />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}