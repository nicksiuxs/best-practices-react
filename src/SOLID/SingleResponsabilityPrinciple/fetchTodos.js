const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .catch(error => { console.error('Error:', error) })
}

export default fetchTodos;