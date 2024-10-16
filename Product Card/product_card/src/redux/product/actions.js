import { ADD_MANY_QUANTITY, ADD_PRODUCT, ADD_PRODUCT_QUANTITY, REMOVE_PRODUCT_QUANTITY } from "./actionTypes"

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

export const addProductQuantity = (product) => {
    return {
        type: ADD_PRODUCT_QUANTITY,
        payload: product,
    }
}

export const removeProductQuantity = (product) => {
    return {
        type: REMOVE_PRODUCT_QUANTITY,
        payload: product,
    }
}

export const AddManyProductQuantity = (product) => {
    return {
        type: ADD_MANY_QUANTITY,
        payload: product,
    }
}