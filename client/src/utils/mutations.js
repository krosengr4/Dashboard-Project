import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
    mutation addProfile($name: String!, $description: String!, $password: !String) {
        addProfile(name: $name, description: $description, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($name: String!, $password: String!) {
        login(name: $name, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`;
