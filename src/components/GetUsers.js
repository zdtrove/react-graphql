import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../graphQL/Queries'

function GetUsers() {
    const { error, loading, data } = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers)
        } 
    }, [data])

    return (
        <div>
            {users.map(user => {
                return <h1>{user.firstName}</h1>
            })}
        </div>
    )
}

export default GetUsers
