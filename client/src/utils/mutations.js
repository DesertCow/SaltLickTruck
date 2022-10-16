import { gql } from '@apollo/client';


export const LOGIN_Q = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        password
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
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