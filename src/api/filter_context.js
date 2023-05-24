import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./filter_reducer";
import { useGlobalContext } from "./context";

const FilterContext = createContext();

    const initialState = {
        category : [],

    }

const FilterContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    const {product} = useGlobalContext();

    useEffect(() => {
        dispatch({type: 'GET_CATEGORY', payload: product})
    }, [product])


    return(
     <FilterContext.Provider value={{...state}}>
        {children}
    </FilterContext.Provider>
    )
}


export const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterContextProvider}