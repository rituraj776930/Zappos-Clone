export const ADD_CART = 'ADD_CART'
export const UPDATE_CART = "UPDATE_CART"
export const ADD_QUANTITY = "ADD_QUANTITY"
export const REMOVE_QUANTITY = "REMOVE_QUANTITY"
export const ADD_DATA_TO_SIGNUP = "ADD_DATA_TO_SIGNUP"
export const SET_AUTH = "SET_AUTH"
export const REMOVE_AUTH = "REMOVE_AUTH"
export const SET_USER = "SET_USER"
export const HANDLE_REMOVE = "HANDLE_REMOVE"


export const addtocart = (payload)=>(dispatch)=>{
    dispatch({
        type:ADD_CART,
        payload:payload
    })
}

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

export const addDataToSignUp=(payload)=>(dispatch)=>{
    dispatch({
        type:ADD_DATA_TO_SIGNUP,
        payload:payload
    })
}

export const setauth = ()=>(dispatch)=>{
    dispatch({
        type:SET_AUTH
    })
}
export const removeauth = ()=>(dispatch)=>{
    console.log("false")
    dispatch({
        type:REMOVE_AUTH
    })
}
export const setCredentials=(payload)=>(dispatch)=>{
    dispatch({
        type:SET_USER,
        payload:payload
    })
}

export const removeCart = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({
        type:HANDLE_REMOVE,
        payload:payload
    })
}