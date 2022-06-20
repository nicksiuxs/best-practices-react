import React, { useReducer, useState } from 'react'

const initialTodos = [
    { id: 1, title: 'Todo #1' },
    { id: 2, title: 'Todo #2' }
]

const Todo = (props) => {
    const { title, clickButtonDelete, clickButtonUpdate } = props
    return (
        <li className="flex justify-between mb-1">
            {title}
            <div className='w-1/2 flex justify-between'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={clickButtonDelete}
                >
                    delete
                </button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={clickButtonUpdate}
                >
                    update
                </button>
            </div>
        </li>
    )
}

const TYPES = {
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
}

/**
 * Muy importante dentro del reducer debemos evitar la mutacion del estado
 * No debe modificarse, solo debe devolver un valor 
 * se puede usar map, filter, reduce
 * el action.payload es un argumento para mandarle alguna informacion necesaria
 */
const todosReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD:
            return [...state, action.payload]
        case TYPES.DELETE:
            return state.filter(todo => todo.id !== action.payload.id);
        case TYPES.UPDATE: {
            const todoEdit = action.payload
            return state.map(todo => todo.id === todoEdit.id ? todoEdit : todo);
        }
        default:
            return state;
    }
}
const TodoApp = () => {
    const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos)
    const [text, setText] = useState("")

    const addNewTodo = (e) => {
        e.preventDefault()
        const todo = { id: Date.now(), title: text }
        dispatchTodos({
            type: TYPES.ADD,
            payload: todo
        })
        setText('');
    }

    const deleteTodo = (todo) => {
        dispatchTodos({
            type: TYPES.DELETE,
            payload: todo
        })
    }

    const updateTodo = (todo) => {
        const newTodo = { id: todo.id, title: text }
        dispatchTodos({
            type: TYPES.UPDATE,
            payload: newTodo
        })
    }

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <section className='w-1/2 h-1/3 rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col'>
                <h1 className="font-bold text-xl text-center border-b pb-1">Todos</h1>
                <form className="my-2" onSubmit={addNewTodo}>
                    <input className="w-full" type="text" placeholder='Todo' value={text} onChange={(e) => setText(e.target.value)} />
                </form>
                <ul>
                    {
                        todos.map(todo => (
                            // el payload es data que necesitemos para usarlos en el reducer
                            <Todo key={todo.id} title={todo.title}
                                clickButtonDelete={() => deleteTodo(todo)}
                                clickButtonUpdate={() => updateTodo(todo)}
                            />)
                        )
                    }
                </ul>
            </section>
        </main>
    )
}

export default TodoApp