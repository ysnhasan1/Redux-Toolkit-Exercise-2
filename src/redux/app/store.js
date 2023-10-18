import { configureStore } from "@reduxjs/toolkit";
import homeValueSlice from "../features/homeValue/homeValueSlice";
import homeValue2Slice from "../features/homeValue2/homeValue2Slice";
import detailValueSlice from "../features/detailValue/detailValueSlice";

export const store = configureStore({
    reducer: {
        homeValueReducer: homeValueSlice, // Diğer sayfalarda "homeValueReducer" olarak kullanacağız.
        homeValue2Reducer: homeValue2Slice, // Diğer sayfalarda "homeValue2Reducer" olarak kullanacağız.
        detailValueReducer: detailValueSlice // Diğer sayfalarda "detailValueReducer" olarak kullanacağız.
    }
})