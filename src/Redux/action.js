export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = "UPDATE_CART"
export const ADD_QUANTITY = "ADD_QUANTITY"
export const REMOVE_QUANTITY = "REMOVE_QUANTITY"



export const addtocart = (payload)=>(dispatch)=>{
    dispatch({
        type:ADD_CART,
        payload:payload
    })
}

// export const updatecart = (payload)=>(dispatch)=>{
//     dispatch({
//         type:UPDATE_CART,
//         payload:payload
//     })
// }

export const reducequantity =(payload)=>(dispatch)=>{
    dispatch({
        type:REMOVE_QUANTITY,
        payload:payload
    })
}
export const addquantity =(payload)=>(dispatch)=>{
    dispatch({
        type:ADD_QUANTITY,
        payload:payload
    })
}