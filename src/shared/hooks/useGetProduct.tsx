import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "services"
import { getDataOneProduct, getStatusOneProduct, resetStatusByProduct } from "services/slice/shop"
import { fetchOneProductById } from "services/slice/shop/fetcher"
import { useAppDispatch } from "./redux/useAppDispatch"

export function useGetProduct(productId: number) {
    const dispatch = useAppDispatch()
    const status = useSelector((state: RootState) => getStatusOneProduct(state))
    const data = useSelector((state: RootState) => getDataOneProduct(state))

    useEffect(() => {
        if (status === undefined) {
            dispatch(fetchOneProductById(productId))
        }
    }, [status, dispatch, productId])

    const isUninitialized = status === undefined
    const isLoading = status === "загрузка" || status === undefined
    const isError = status === "ошибка"
    const isSuccess = status === "успешно"

    return { data, isUninitialized, isLoading, isError, isSuccess }
}
