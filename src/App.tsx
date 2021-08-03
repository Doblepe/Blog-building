import {useState} from 'react'
import { User } from './interfaces'; // We export interfaces to use them in further components

export default function App(){

    const [user, setUser] = useState<User | null>(null) // As default, useState gives the useState value, but if we want to change it we need to change it with the correct type
    const fetchUser = () => setUser({
        name: "Juan",
        age: 22,
        address: {
            street: "mainStreet",
            number: 5
        },
        admin: false
    });
    return (
      <>
        <button onClick={fetchUser}>Mostrar</button>
        {user && <p>{`welcome ${user?.name}`}</p>}
        </>)
    }   

