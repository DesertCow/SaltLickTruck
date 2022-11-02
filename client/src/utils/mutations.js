import { gql } from '@apollo/client';


export const LOGIN_Q = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      admin
      user {
        _id
        email
        password
      }
    }
  }
`;


export const CREATE_USER = gql`
mutation CreateUser($email: String!, $password: String!, $customerName: String!) {
  createUser(email: $email, password: $password, customerName: $customerName) {
    token
    user {
      _id
      email
      password
      loginValid
      loginToken
      customerName
    }
  }
}
`;

export const PASS_UPDATE = gql`
  mutation UpdatePassword($id: String!, $password: String!) {
    updatePassword(_id: $id, password: $password) {
      token
    }
  }
`;

export const EMAIL_UPDATE = gql`
  mutation Mutation($id: String!, $email: String!) {
    updateEmail(_id: $id, email: $email) {
      token
    }
  }
`;

// export const CHECKOUT = gql`
//   mutation CheckOut($finalCart: [String]) {
//     checkOut(finalCart: $finalCart)
//   }
// `;

export const CHECKOUT = gql`
  mutation Checkout($items: [String], $prices: [Float], $qty: [Float], $customerName: String) {
    checkout(items: $items, prices: $prices, qty: $qty, customerName: $customerName)
  }
`;