import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

const AppContext = React.createContext();

const url = "https://fakestoreapi.com/products";

const initialState = {
    product : [],
    cate :[],
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState)

    const product = async () => {
        try {
            axios.get(url)
            .then((res) => {
               const products = (res.data);
                dispatch({type:"GET_SERVICES", payload: products})
                // dispatch({type:"GET_CATEGORY", payload: products})
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        product();
    }, [])

    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
}

// global variable
const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}