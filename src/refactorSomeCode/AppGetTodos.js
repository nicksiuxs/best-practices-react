import React, { useState, useEffect } from 'react'

//esta funcion es importante dado el que caso de que cambie el metodo en como se hace lo request ose depreque,
//se podra garantizar que funcionara en todos lo archivos donde se manden y asi evitariamos modificar en todos los archivos
// donde se hacen el fetch (que es el caso actual)
const getRequest = (url) => {
    return fetch(url).then(res => res.json)
}

// Funcion para poder abstraer códigos
const getTodosRquest = () => {
    return getRequest('/todos');
}

const AppGetTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        // Esto se puede refactorizar cuando la vamos a utilizar en muchos lados
        // fetch('/todos').then(res => res.json).then(setTodos)
        getTodosRquest().then(setTodos)
    }, []);

    return (
        <>
            <h1>Todos</h1>
            <ul>
                {
                    todos.map((todo, index) => (<li key={index}>{todo.text}</li>))
                }
            </ul>
        </>
    )
}

export default AppGetTodos