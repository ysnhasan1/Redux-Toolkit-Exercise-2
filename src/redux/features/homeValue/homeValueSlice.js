import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 5
}

export const homeValueSlice = createSlice({
    name: "homeValue",
    initialState,
    reducers: {

    }
})

export default homeValueSlice.reducer;