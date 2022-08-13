const initialState={
count:0
}
const CounterReducer=(state =initialState, action)=>{
    switch(action.type){
        case "INC":
           
            return{
            ...state,
             count:initialState.count+action.payload};
    
    case "DEC":
        return {
             ...state,
          count:  state.count - action.payload};
        default:
            return{ ...initialState}

}

}

export default CounterReducer;