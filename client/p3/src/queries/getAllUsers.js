import { gql } from '@apollo/client'

const GET_USERS = gql`
    query getUsers {
        users {
            id
            username
        }
    }`;


export { GET_USERS };