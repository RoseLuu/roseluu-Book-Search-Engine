import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookData: SaveBookInput) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      saveBooks {
        bookID
        title
        authors
        description
        image
        link
      }
    }
  }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookID: $bookID) {
      _id
      username
      email
      saveBooks {
        bookID
        title
        authors
        description
        image
        link
      }
    }
  }
`;
