import React, { useReducer } from 'react'
import ProductItem from './components/ProductItem';
import TYPES from './types';
import productReducer, { productInitialState } from './reducers/productReducer'

const ProductApp = () => {
    const [state, dispatch] = useReducer(productReducer, productInitialState)
    const { products, cart, activeProduct } = state;
    return (
        <main className="flex flex-col items-center justify-center h-screen bg-slate-400">
            <section className='w-4/5 h-1/2 rounded overflow-hidden shadow-lg p-4 bg-white '>
                <div>
                    <h2>Preview</h2>
                    <p>Actice product: {activeProduct.title}</p>
                </div>
                <div className='flex p-1'>
                    <div className='w-1/2 flex-col'>
                        <h2 className="font-bold text-xl border-b pb-1">Products</h2>
                        <ul className='mt-2'>
                            {
                                products.map(product => (<ProductItem key={'products_' + product.id} product={product}
                                    buttonActionShow={() =>
                                        dispatch({
                                            type: TYPES.SHOW_PRODUCT,
                                            payload: product
                                        })
                                    }
                                    buttonActionAdd={() =>
                                        dispatch({
                                            type: TYPES.ADD_TO_CART,
                                            payload: product
                                        })
                                    }
                                />))
                            }
                        </ul>
                    </div>
                    <div className='w-1/2 flex-col p-1'>
                        <h2 className="font-bold text-xl border-b pb-1">Shopping cart</h2>
                        <ul className='mt-2'>
                            {
                                cart.map(product => <ProductItem key={'cart_' + product.id} product={product}
                                    buttonActionRemove={() => dispatch({
                                        type: TYPES.REMOVE_FROM_CART,
                                        payload: product.id
                                    })}
                                    buttonActionRemoveOne={() => dispatch({
                                        type: TYPES.REMOVE_ONE_FROM_CART,
                                        payload: product.id
                                    })}
                                    buttonActionAddOne={() => dispatch({
                                        type: TYPES.ADD_TO_CART,
                                        payload: product
                                    })}
                                />)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductApp