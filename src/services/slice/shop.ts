import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'services'
import { API_URL } from 'shared/constants'
import { IProduct } from 'shared/interface/product'
import { RequestState } from 'shared/interface/requestEnum'

export const fetchAllCategories = createAsyncThunk<string[]>(
    'shop/fetchAllCategories',
    async () => {
        const response = await fetch(`${API_URL}/products/categories`)
        const data = await response.json()
        return data
    }
)

export const fetchInCategory = createAsyncThunk<IProduct[], string>(
    'shop/fetchInCategory',
    async (categoryName) => {
        const response = await fetch(`${API_URL}/products/category/${categoryName}`)
        const data = await response.json()
        return data
    }
)

interface IShopState {
    categories: string[] | undefined
    products: Record<string, IProduct[] | undefined>
    statusByCategories: RequestState | undefined
    statusByCategoryProducts: Record<string, RequestState | undefined>
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        categories: undefined,
        products: {},
        statusByCategories: undefined,
        statusByCategoryProducts: {},
    } as IShopState,
    reducers: {},
    extraReducers: (builder) => {
        //categories
        builder.addCase(fetchAllCategories.pending, (state, action) => {
            state.statusByCategories = RequestState.loading
        })
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.statusByCategories = RequestState.success
            state.categories = action.payload
        })
        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.statusByCategories = RequestState.error
        })
        //---------

        //categoryProducts
        builder.addCase(fetchInCategory.pending, (state, action) => {
            state.statusByCategoryProducts[action.meta.arg] = RequestState.loading
        })
        builder.addCase(fetchInCategory.fulfilled, (state, action) => {
            state.statusByCategoryProducts[action.meta.arg] = RequestState.success
            state.products[action.meta.arg] = action.payload
        })
        builder.addCase(fetchInCategory.rejected, (state, action) => {
            state.statusByCategoryProducts[action.meta.arg] = RequestState.error
        })
        //---------
    },
})

export const getStatusCategories = (state: RootState) => state.shop.statusByCategories
export const getDataCategories = (state: RootState) => state.shop.categories

export const selectStatusCategoryProducts = (state: RootState, category: string) =>
    state.shop.statusByCategoryProducts[category]
export const selectDataCategoryProducts = (state: RootState, category: string) =>
    state.shop.products[category]
