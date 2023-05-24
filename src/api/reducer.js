const Reducer = (state, action) => {



    if(action.type === "GET_SERVICES"){
        return{
            ...state,
            product : action.payload,
        }
    }

    // if(action.type === "GET_CATEGORY"){
    //     const cate = action.payload.filter((currElem) => {
    //         return currElem.category === true
    //     })

    //     return{
    //         ...state,
    //         product : action.payload,
    //         cattegory : cate,
    //     };
    // }


    return state
}

export default Reducer;