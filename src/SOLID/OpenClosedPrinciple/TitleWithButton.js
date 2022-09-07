import React from 'react'
import { Title } from './Title'

const TitleWithButton = ({ title, onClick, buttonText }) => {
    return (
        <Title title={title}>
            <button onClick={onClick}>{buttonText}</button>
        </Title>
    )
}

export default TitleWithButton