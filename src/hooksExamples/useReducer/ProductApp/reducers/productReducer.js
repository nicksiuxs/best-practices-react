import TYPES from "../types";

const productInitialState = {
    products: [
        { id: 1, title: "Product #1" },
        { id: 2, title: "Product #2" },
    ],
    cart: [
        { id: 1, title: "Product #1", quantity: 1 }
    ],
    activeProduct: { id: 1, title: "Product #1" }
}

const productReducer = (state, action) => {
    switch (action.type) {
        case TYPES.SHOW_PRODUCT:
            const productToShow = action.payload;
            return { ...state, activeProduct: productToShow };

        case TYPES.ADD_TO_CART: {
            const newProduct = action.payload;
            const cartContainProduct = state.cart.find(product => product.id === newProduct.id)
            return cartContainProduct ?
                {
                    ...state,
                    cart: state.cart.map(product => {
                        if (product.id === newProduct.id) {
                            return { ...product, quantity: product.quantity + 1 }
                        }
                        return product;
                    })
                }

                : {
                    ...state,
                    cart: [...state.cart, { ...newProduct, quantity: 1 }]
                }
        }

        case TYPES.REMOVE_FROM_CART:
            const productIdToDelete = action.payload
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== productIdToDelete)
            }

        case TYPES.REMOVE_ONE_FROM_CART: {

            const productToDelete = state.cart.find(product => product.id === action.payload)

            return productToDelete.quantity > 1 ?
                {
                    ...state,
                    cart: state.cart.map(product => product.id === productToDelete.id ? { ...product, quantity: product.quantity - 1 } : product)
                } :
                {
                    ...state,
                    cart: state.cart.filter(product => product.id !== productToDelete.id)
                }
        }

        default:
            return state;
    }
}

export { productInitialState }
export default productReducer;