import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "services"
import { getDataAllProducts, getStatusAllProducts } from "services/slice/shop"
import { fetchAllProducts } from "services/slice/shop/fetcher"
import { useAppDispatch } from "./redux/useAppDispatch"

export function useGetAllProducts() {
    const dispatch = useAppDispatch()
    const status = useSelector((state: RootState) => getStatusAllProducts(state))
    const data = useSelector((state: RootState) => getDataAllProducts(state))

    useEffect(() => {
        if (status === undefined) {
            dispatch(fetchAllProducts())
        }
    }, [status, dispatch])

    const isUninitialized = status === undefined
    const isLoading = status === "загрузка" || status === undefined
    const isError = status === "ошибка"
    const isSuccess = status === "успешно"

    return { data, isUninitialized, isLoading, isError, isSuccess }
}
