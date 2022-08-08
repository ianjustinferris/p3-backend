import { gql } from '@apollo/client'

const GET_PIN_BY_ID = gql`
    query getPinByID {
        pin {
            id
            username
        }
    }`;


export { GET_USERS };