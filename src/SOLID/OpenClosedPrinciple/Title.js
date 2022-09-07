import React from 'react'

// export const Title = ({ title, type, href, buttonText, onClick }) => {
//     return (
//         <div>
//             <h1>{title}</h1>
//             {
//                 type === "withLinkButton" && (
//                     <div onClick={onClick}>
//                         <a href={href}>{buttonText}</a>
//                     </div>
//                 )
//             }
//             {
//                 type === "withNormalButton" && (
//                     <button onClick={onClick}>{buttonText}</button>
//                 )
//             }
//         </div>
//     )
// }

export const Title = ({ title, children }) => {

    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}
