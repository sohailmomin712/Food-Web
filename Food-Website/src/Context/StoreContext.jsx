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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) { // Fixed condition
                let itemInfo = food_list.find((product) => product._id === item); // Fixed arrow function syntax
                if (itemInfo) { // Check if itemInfo exists to avoid errors
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;