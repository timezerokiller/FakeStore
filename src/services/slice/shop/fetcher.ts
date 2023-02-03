import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "shared/constants"
import { IProduct } from "shared/interface/product"

export const fetchAllCategories = createAsyncThunk<string[]>(
    "shop/fetchAllCategories",
    async () => {
        const response = await fetch(`${API_URL}/products/categories`)
        const data = await response.json()
        return data
    }
)

export const fetchInCategory = createAsyncThunk<IProduct[], string>(
    "shop/fetchInCategory",
    async (categoryName) => {
        const response = await fetch(`${API_URL}/products/category/${categoryName}`)
        const data = await response.json()
        return data
    }
)

export const fetchAllProducts = createAsyncThunk<IProduct[]>("shop/fetchAllProducts", async () => {
    const response = await fetch(`${API_URL}/products`)
    const data = await response.json()
    return data
})

export const fetchOneProductById = createAsyncThunk<IProduct, number>(
    "shop/fetchOneProductById",
    async (productId) => {
        const response = await fetch(`${API_URL}/products/${productId}`)
        const data = await response.json()
        return data
    }
)
