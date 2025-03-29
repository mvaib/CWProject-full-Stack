import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext()

const StoreContextProvider = (props) => {
    const [cartItem,setCartItem] = useState({})
    const url = "https://skinstore-backend-fp0n.onrender.com"
    const [product_list,setProduct_list] = useState([])
    const [currentState,setCurrentState] = useState("Sign Up")
    const [token,setToken] = useState(() => {
        return localStorage.getItem("token") || null
    })
     
    
    const fetchProductList = async () => {
        const response = await axios.get(`${url}/api/product/list`)
        setProduct_list(response.data.data)
    }


    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    
        if (token) {
            try {
                const response = await axios.post(url + "/api/cart/add", { itemId }, { headers: {Authorization : `Bearer ${token}`} });
            } catch (error) {
                console.error('Failed to add to cart:', error.response ? error.response.data : error.message);
            }
        }
    };
    

    const removeFromCart = async (itemId)=>{
        setCartItem((prev) => ({...prev, [itemId] : prev[itemId] -1}))
        if(token){
            try {
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{Authorization : `Bearer ${token}`}})
                
            } catch (error) {
                console.error('Failed to remove from cart:', error.response ? error.response.data : error.message);
            }
        }
    }

    const clearCart = async () => {
        setCartItem({})
        if(token){
            try {
                await axios.post(url+"/api/cart/clear",{}, {headers : {Authorization : `Bearer ${token}`}})
            } catch (error) {
                console.error('Failed to clear cart:', error.response ? error.response.data : error.message);
            }
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if(cartItem[item] > 0){
                let itemData = product_list.find((product) => product._id == item);
                if (itemData) { 
                    totalAmount += itemData.price * cartItem[item];
                } else {
                    console.warn(`Item with ID ${item} not found in product_list.`);
                }
            }
        }
        return totalAmount;
    }

    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url+"/api/cart/get",{},{headers : {Authorization : `Bearer ${token}`}})
            setCartItem(response.data.data)
        } catch (error) {
            console.error('Failed to load cart data:', error.response ? error.response.data : error.message);
        }
    }

    useEffect(() => {
        if(token && token !== "null" && token !== undefined && token.length > 0){
            localStorage.setItem("token",token)
        }
        else{
            localStorage.removeItem("token")
        }
        async function cartData(){
            await loadCartData(token)
        }
        cartData()
    },[token])


    useEffect(() =>{
        async function loadData(){
            await fetchProductList()
            
        }
        loadData()
    },[])
    const contextValue ={
        product_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        clearCart,
        currentState,
        setCurrentState
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
