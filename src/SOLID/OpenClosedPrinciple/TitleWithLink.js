import React from 'react'
import { Title } from './Title'

const TitleWithLink = ({ title, href, buttonText }) => {
    return (
        <Title title={title}>
            <div>
                <a href={href}>{buttonText}</a>
            </div>
        </Title>
    )
}

export default TitleWithLink