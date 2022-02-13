import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[]
}

interface Customer {
    id: string,
    name: string,
    food: string[]
}

interface FoodToCustomerPayload {
    food: string;
    id: string
}

const initialState: CustomerState = {
    value: [],
}

export const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<FoodToCustomerPayload>) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            })
        }
    }
})

export const { addCustomer, addFoodToCustomer } = customersSlice.actions

export default customersSlice.reducer