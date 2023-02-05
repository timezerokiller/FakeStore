import { API_URL } from "shared/constants"
import { IProduct } from "shared/interface/product"

export const getOneProductFromApi = async (productId: number): Promise<IProduct> => {
    const respose = await fetch(`${API_URL}/products/${productId}`)
    return await respose.json()
}
