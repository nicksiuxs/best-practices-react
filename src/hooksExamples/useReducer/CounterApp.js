import React, { useReducer } from 'react'

/**
 * Normalmente los types se trabajan como constantes 
 */
const TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
/**
 * Un reducer es una función recibe como párametros
 * el state (estado previo) y el action  y retornará un state (nuevo state )
 */
const counterReducer = (state, action) => {
    switch (action.type) {
        case TYPES.INCREMENT:
            return state + 1;
        case TYPES.DECREMENT:
            return state - 1;
        case TYPES.RESET:
            return 0;
        default:
            return state
    }
}

const CounterApp = () => {

    /**
     * El disptach se dipara con acciones para cambiar el estado
     * recibe como párametros un reducer y un valor inicial
     * 
     * reducers: para nada interacturan con reducers externos
     * el dispatch recibe un objeto conocido como action que tiene un type 
     */
    const [counter, counterDispatch] = useReducer(counterReducer, 0);
    return (
        <main className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <section className='w-1/2 h-1/3 rounded overflow-hidden shadow-lg p-4 bg-white flex flex-col justify-between'>
                <h1 className="font-bold text-xl text-center">Counter App</h1>
                <h2 className="font-bold text-xl text-center">Clicks: {counter}</h2>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => counterDispatch({ type: TYPES.INCREMENT })}
                    >
                        Increment
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => counterDispatch({ type: TYPES.DECREMENT })}
                    >
                        Decrement
                    </button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => counterDispatch({ type: TYPES.RESET })}
                    >
                        Reset
                    </button>
                </div>
            </section>
        </main>
    )
}

export default CounterApp