import React, {useEffect, useState} from "react";
import {listUsers} from "../service/UserService";

export const AppList = () => {
    const [users, setUsers] = useState([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        listUsers("/users")
            .then(({data}) => {
                setUsers(data)
            })
            .catch((e) => {
                setErr(e.message)
            })
    }, []);

    return (
        <div>{err}
            {users.map(user => (<div>
                    <p>UserName: {user.username}</p>
                    <p>Passwork: {user.password}</p>
                </div>)
            )}
        </div>
    )
}
