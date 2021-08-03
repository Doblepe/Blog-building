import {useState} from 'react'
interface User {
    name: string,
    age: number,
    addres: {
        street: string,
        number: number
    },
    admin: boolean
}
export default function App(){

    const [user, setUser] = useState<User | null>(null)
    const fetchUser = () => setUser({
        name: "Juan",
        age: 22,
        addres: {
            street: "mainStreet",
            number: 5
        },
        admin: false
    });
    return (
      <>
        <button onClick={fetchUser}>Mostrar</button>
        {user && <p>{`welcome ${user?.name}`}</p>};
        </>)
    }   

