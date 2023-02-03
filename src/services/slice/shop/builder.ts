import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { RequestState } from "shared/interface/requestEnum"
import { IShopState } from "shared/interface/shop"
import {
    fetchAllCategories,
    fetchAllProducts,
    fetchInCategory,
    fetchOneProductById,
} from "./fetcher"

//categories
export const builderGetAllCategories = (builder: ActionReducerMapBuilder<IShopState>) => {
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
}

export const builderGetInCategory = (builder: ActionReducerMapBuilder<IShopState>) => {
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
}

export const builderGetAllProducts = (builder: ActionReducerMapBuilder<IShopState>) => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
        state.statusByAllProducts = RequestState.loading
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.statusByAllProducts = RequestState.success
        state.products.all = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
        state.statusByAllProducts = RequestState.error
    })
}

export const builderGetProduct = (builder: ActionReducerMapBuilder<IShopState>) => {
    builder.addCase(fetchOneProductById.pending, (state, action) => {
        state.statusByProduct = RequestState.loading
    })
    builder.addCase(fetchOneProductById.fulfilled, (state, action) => {
        state.statusByProduct = RequestState.success
        state.product = action.payload
    })
    builder.addCase(fetchOneProductById.rejected, (state, action) => {
        state.statusByProduct = RequestState.error
    })
}
