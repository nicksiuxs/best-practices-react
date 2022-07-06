import React from 'react'

const Button = ({ title, buttonAction }) => {
    return (
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={buttonAction}
        >
            {title}
        </button>
    )
}

export default Button