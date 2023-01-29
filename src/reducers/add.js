const initval={
    carts:[]
}

export const Cart = (state = initval , action) =>{
    // switch (action.type) {
    //     case 'add':
    //         return{
    //             ...state,
    //             carts:[...state.carts,action.data]
    //             // ...state.carts,
    //         }
    //     default:
    //         return state
    // }
    if(action.type == 'add')
    {
        return{
                        ...state,
                        carts:[...state.carts,action.data]
                        // ...state.carts,
                    }
    }
    else
    {
        return state
    }
}