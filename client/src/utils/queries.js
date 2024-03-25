//! This file is to query user profile information

import { gql } from '@apollo/client';

export const QUERY_SINGLE_PROFILE = gql `
query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      description
    }
  }
`;