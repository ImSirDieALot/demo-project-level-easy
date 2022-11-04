import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers(id: 100) {
      id
      firstName
      lastName
      email
      password
    }
  }
`;
