import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    // const addToCart = (itemId) => {
    //simpler approach
    //     setCartItems((prev) => ({
    //         ...prev, 
    //         [itemId]: (prev[itemId] || 0) + 1
    //     }));
    // };

    const removeFromCart = (itemId) => {
        // setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0) // Prevent negative values
        }));

    }
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;