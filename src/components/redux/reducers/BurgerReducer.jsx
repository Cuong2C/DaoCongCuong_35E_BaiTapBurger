const burgerState = {
    burger: {
    salad: 1,
    cheese: 1,
    beef: 1
    },
    menu: {
    salad: 10,
    cheese: 20,
    beef: 55
    },
    total:0
  
    }

export const BurgerReducer = (state = burgerState, action)=>{
    switch(action.type){
        case 'THEM_SO_LUONG':{
            // if(state.burger.action.propsM < 0){
            //     return {...state};
            // }
           let newBurger = {...state.burger};
            newBurger[action.propsM] += action.payload;
            state.burger  = newBurger;

            
            return {...state};

        }
        default: return state;
    }
}