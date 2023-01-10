import { createContext, useContext, useReducer, useState } from "react";
import { initialState, postsReducer } from "./postsReducers";

const Store = createContext();
Store.displayName = 'Store';

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
    const [globalState, dispatch] = useReducer(postsReducer, initialState)
    return (
        <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
    )
}