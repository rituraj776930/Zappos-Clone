import { ADD_CART, ADD_QUANTITY, REMOVE_QUANTITY, UPDATE_CART } from "./action"

const initState = {
    cartdata: JSON.parse(localStorage.getItem("cartdata")) || [],
    total_price:JSON.parse(localStorage.getItem("total_price")) || 0,
}

export const Reducer = (state = initState , {type,payload})=>{
    switch(type){
        
        case ADD_CART:{
            let total = JSON.parse(localStorage.getItem("total_price")) || 0
            
            let flag = false
            let id = payload.id
            let data = JSON.parse(localStorage.getItem("cartdata")) || []
            console.log(data)
             data.map((item)=>{
                 console.log(item.id,id)
                if(item.id == id){
                    item.quantity++
                    flag = true
                    
                }
            })
            
            if(flag == false){
                data = [...data,payload]
            }
            localStorage.setItem("cartdata",JSON.stringify(data))
            total = data.reduce((acc,elem)=>(acc + ((elem.price)*(elem.quantity))),0)
            localStorage.setItem("total_price",JSON.stringify(total))
            return{
                ...state,
                cartdata:data,
                total_price:total
            }
        }

        case REMOVE_QUANTITY:{
            let data = JSON.parse(localStorage.getItem("cartdata")) || []
            data.map((item)=>{
                if(item.id == payload.id){
                    item.quantity--
                }
            })
            localStorage.setItem("cartdata",JSON.stringify(data))
            let total = JSON.parse(localStorage.getItem("total_price")) || 0
            total = data.reduce((acc,elem)=>(acc + ((elem.price)*(elem.quantity))),0).toFixed(2) 
            localStorage.setItem("total_price",JSON.stringify(total))
            return{
                ...state,
                cartdata:data,
                total_price:total
            }
        }
        
        case ADD_QUANTITY:{
            let data = JSON.parse(localStorage.getItem("cartdata")) || []
            data.map((item)=>{
                if(item.id == payload.id){
                    item.quantity++
                }
            })
            localStorage.setItem("cartdata",JSON.stringify(data))
            let total = JSON.parse(localStorage.getItem("total_price")) || 0
            total = data.reduce((acc,elem)=>(acc + ((elem.price)*(elem.quantity))),0).toFixed(2) 
            localStorage.setItem("total_price",JSON.stringify(total))
            return{
                ...state,
                cartdata:data,
                total_price:total
            }
        }


        default:
            return state
    }
}