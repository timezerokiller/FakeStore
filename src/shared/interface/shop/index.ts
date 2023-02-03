import { IProduct } from "shared/interface/product"
import { RequestState } from "../requestEnum"

export interface IShopState {
    //state
    categories: string[] | undefined
    products: Record<string, IProduct[] | undefined>
    product: IProduct | undefined
    card: IProduct[]
    //status response
    statusByCategories: RequestState | undefined
    statusByAllProducts: RequestState | undefined
    statusByProduct: RequestState | undefined
    statusByCategoryProducts: Record<string, RequestState | undefined>
}
