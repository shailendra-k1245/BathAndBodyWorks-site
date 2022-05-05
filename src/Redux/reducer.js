import { ADD_PRODUCT, AUTH } from "./action";

const initState = {
    auth : false,
    products:[]
}

export const reducer = (store=initState,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT:
            return {...store,products:[...store.products,payload]}
        case AUTH:
            return {...store,auth:payload}
        default:
            return store;
    }
}