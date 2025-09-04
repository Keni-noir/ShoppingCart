import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1
                })
            }
        },
        removeFromCart:(state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        updateQuantity: (state, action) =>{
            const {id, quantity} = action.payload;
            if (quantity <= 0) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                const existingItem = state.items.find((item) => item.id === id);
                if (existingItem) {
                    existingItem.quantity = quantity;
                }
            }
        },


        clearCart: (state) => {
            state.items = [];
        }
    },
    
});

export const { addtoCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;