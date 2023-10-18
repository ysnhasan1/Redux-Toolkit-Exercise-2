import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [0]
}

export const detailValueSlice = createSlice({
    name: "detailValue",
    initialState,
    reducers: {
        sumFunc: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const { sumFunc } = detailValueSlice.actions;

export default detailValueSlice.reducer;