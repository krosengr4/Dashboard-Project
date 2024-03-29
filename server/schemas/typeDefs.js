//! This file contains the typeDefs for graphQL

const typeDefs = `
type Profile {
    _id: ID
    name: String
    email: String
    password: String
    description: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;