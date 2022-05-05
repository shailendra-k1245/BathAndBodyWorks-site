export const AUTH = "AUTH";

export const ADD_PRODUCT = "ADD_PRODUCT";

export const auth = (status)=>{
    return{
        type:"AUTH",
        payload:status
    }
}

export const addProduct = (data)=>{
    return{
        type:"ADD_PRODUCT",
        payload:data
    }
}
