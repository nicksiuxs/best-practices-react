import React from 'react'
import Button from './Button'

const ProductItem = ({ product, buttonActionShow, buttonActionAdd, buttonActionRemove, buttonActionRemoveOne, buttonActionAddOne }) => {
    const { title, quantity } = product
    return buttonActionRemove
        ? <li className="flex justify-between mb-1">
            {title} - quantity:{quantity}
            <div className='w-1/2 flex justify-between'>
                <Button title="-" buttonAction={buttonActionRemoveOne} />
                <Button title="+" buttonAction={buttonActionAddOne} />
                <Button title="Remove from cart" buttonAction={buttonActionRemove} />
            </div>
        </li > :
        <li className="flex justify-between mb-1">
            {title}
            <div className='w-1/2 flex justify-between'>
                <Button title="Show" buttonAction={buttonActionShow} />
                <Button title="Add to cart" buttonAction={buttonActionAdd} />
            </div>
        </li>

}

export default ProductItem