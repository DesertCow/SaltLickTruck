import { gql } from '@apollo/client';

export const LOGIN_Q = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password)
}
`;