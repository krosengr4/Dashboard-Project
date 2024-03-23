//! This file contains code for authorization of users

// Import error message and JWT(token)
const {GraphQLError} = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '1h';

module.exports = {
    AuthenticationError: new GraphQLError('Incorrect password or username. Try again.', {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    }),
    signToken: function ({ email, name, _id }) {
      const payload = { email, name, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };