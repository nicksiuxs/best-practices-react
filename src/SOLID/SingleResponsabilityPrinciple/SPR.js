import React from 'react'
import useFetchTodos from './useFetchTodos';

/**
 *  Este componente tiene muchas responsabilidades como:
 *  Gestionar el estado 
 *  Traer el fetching de datos 
 *  rendereizar la lista
 *  Idealmente no debería ser asi, debe tener solo una responsabilidad.
 */
const SPR = () => {

    // Todo esto se extrae en un custom hook

    // const [data, setData] = useState([]);
    // const [isFetching, setIsFetching] = useState(true);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .catch(error => { console.error('Error:', error) })
    //         .then(response => {
    //             setData(response)
    //             console.log(response)
    //         })
    //         .finally(setIsFetching(false))
    // }, [])

    const { todos, isFetching } = useFetchTodos();

    if (isFetching) {
        return <p>...loading</p>
    }

    return (
        <ul>
            {
                todos.map(el => {
                    return <li key={el.id} >* {el.title}</li>
                })
            }
        </ul>
    )
}

export default SPR