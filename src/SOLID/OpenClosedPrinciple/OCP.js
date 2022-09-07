import React from 'react'
import TitleWithButton from './TitleWithButton'
import TitleWithLink from './TitleWithLink'

const OCP = () => {
    return (
        <div>
            <h1>Open - Closed Principle</h1>
            <br />
            <TitleWithLink title={"Titulo con link"} buttonText={"soy un Link"} href="/" />
            <br />
            <TitleWithButton title={"Title with button"} buttonText="soy un botón" onClick={() => console.log("click")} />
        </div>

    )
}

export default OCP