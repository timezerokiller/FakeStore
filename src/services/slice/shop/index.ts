import {
    builderGetAllCategories,
    builderGetAllProducts,
    builderGetInCategory,
    builderGetProduct,
} from "./builder"
import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "services"
import { IProduct } from "shared/interface/product"
import { IShopState } from "shared/interface/shop"

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categories: undefined,
        products: {},
        product: undefined,
        card: [],
        statusByProduct: undefined,
        statusByAllProducts: undefined,
        statusByCategories: undefined,
        statusByCategoryProducts: {},
    } as IShopState,
    reducers: {
        addProductInCard: (state, action: PayloadAction<IProduct>) => {
            const result = state.card.find((product) => product.id === action.payload.id)

            if (result)
                state.card = state.card.map((product) => {
                    if (product.id === action.payload.id) {
                        return { ...product, quantity: (product.quantity += 1) }
                    }
                    return product
                })
            else state.card.push({ ...action.payload, quantity: 1 })
        },
        removeProductInCard: (state, action: PayloadAction<number>) => {
            state.card = state.card.filter((product) => product.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builderGetAllCategories(builder),
            builderGetAllProducts(builder),
            builderGetInCategory(builder),
            builderGetProduct(builder)
    },
})

export const getStatusCategories = (state: RootState) => state.shop.statusByCategories
export const getDataCategories = (state: RootState) => state.shop.categories

export const getStatusAllProducts = (state: RootState) => state.shop.statusByAllProducts
export const getDataAllProducts = (state: RootState) => state.shop.products.all

export const getStatusOneProduct = (state: RootState) => state.shop.statusByProduct
export const getDataOneProduct = (state: RootState) => state.shop.product

export const selectStatusCategoryProducts = (state: RootState, category: string) =>
    state.shop.statusByCategoryProducts[category]
export const selectDataCategoryProducts = (state: RootState, category: string) =>
    state.shop.products[category]

export const { addProductInCard, removeProductInCard } = shopSlice.actions
