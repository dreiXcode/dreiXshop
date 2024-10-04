import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_category = createAsyncThunk(
    'product/get_category',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-categories')
            //console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
) //End Method


export const get_products = createAsyncThunk(
    'product/get_products',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-products')
            //console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.response)
        }
    }
) //End Method

export const homeReducer = createSlice({
    name: 'home',
    initialState:{
        categories: [],
    },
    reducers : {
    
    },
    extraReducers : (builder) => {
        builder
        .addCase(get_category.fulfilled, (state, {payload}) => {
            state.categories = payload.categories;
        })
    }
})

export default homeReducer.reducer;