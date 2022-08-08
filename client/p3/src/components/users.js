import { useQuery } from '@apollo/client'
import { GET_USERS } from '../queries/getAllUsers'


export default function Users() {

    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) return <p>LOADING...</p>
    if (error) return <p>ERROR... </p>
    return (<>
        <div>A list of all know users:</div>
        {
            data.users.map((user) => (
                <div key={user.id} value={user.username}>username: {user.username}
                </div>
            ))
        }
    </>)


};
