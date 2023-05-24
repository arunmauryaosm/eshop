const Reducer = (state, action) => {

        if(action.type === "GET_CATEGORY"){
        return{
            ...state,
            category : [...action.payload],
        }
    }

    return state
}

export default Reducer;