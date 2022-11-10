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
        customerName
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

export const NAME_UPDATE = gql`
  mutation Mutation($id: String!, $name: String!) {
    updateName(_id: $id, name: $name) {
      token
      user {
        customerName
      }
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

export const ORDER_UPDATE_Q = gql`
  mutation UpdateOrderStatus($orderNumber: String, $newOrderStatus: String) {
    updateOrderStatus(orderNumber: $orderNumber, newOrderStatus: $newOrderStatus) {
      _id
      items
      qty
      prices
      bill
      status
      payment
      customerName
    }
  }
`;
