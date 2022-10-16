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
  mutation UpdatePassword($password: String!) {
    updatePassword(password: $password) {
      token
    }
  }
`;

export const EMAIL_UPDATE = gql`
  mutation UpdateEmail($email: String!) {
    updateEmail(email: $email) {
      token
    }
  }
`;