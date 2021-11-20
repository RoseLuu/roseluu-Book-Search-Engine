const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  input SaveBookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: SaveBookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
