import { gql } from '@apollo/client'

const GET_PINS = gql`
    query getPins {
        pins {
            id
            username
            title
            description
            thumbnail
            lat
            lon
            URL
            filename
        }
    }`;


export { GET_PINS };