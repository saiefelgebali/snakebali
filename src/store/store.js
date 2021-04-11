import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const Store = createContext();

export function StoreProvider({ children }) {

    const initialState = {
        gameRun: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return <Store.Provider value={value}>{children}</Store.Provider>
}