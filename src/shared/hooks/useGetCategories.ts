import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "services"
import { getDataCategories, getStatusCategories } from "services/slice/shop"
import { fetchAllCategories } from "services/slice/shop/fetcher"
import { useAppDispatch } from "./redux/useAppDispatch"

export function useGetCategories() {
    const dispatch = useAppDispatch()
    const status = useSelector((state: RootState) => getStatusCategories(state))
    const data = useSelector((state: RootState) => getDataCategories(state))

    useEffect(() => {
        if (status === undefined) {
            dispatch(fetchAllCategories())
        }
    }, [status, dispatch])

    const isUninitialized = status === undefined
    const isLoading = status === "загрузка" || status === undefined
    const isError = status === "ошибка"
    const isSuccess = status === "успешно"

    return { data, isUninitialized, isLoading, isError, isSuccess }
}
