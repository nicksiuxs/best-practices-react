import { useState, useEffect } from 'react';
import fetchTodos from './fetchTodos';

const useFetchTodos = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchTodos()
            .then(response => {
                setData(response);
            })
            .finally(() => setIsFetching(false))
    }, [])

    return { todos: data, isFetching };
}

export default useFetchTodos;