import { ADD_DATA, ADD_PRODUCT } from "./action";
const initialState = {product: []}

export const reducer = (store = initialState,{type,payload}) =>{
    switch (type) {
        case ADD_PRODUCT:
        return {...store,product:[...payload]}
    case ADD_DATA:
       return {...store,data:payload}
        default:
            return store
    }
}