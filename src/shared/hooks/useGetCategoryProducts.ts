import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'services'
import {
    fetchInCategory,
    selectDataCategoryProducts,
    selectStatusCategoryProducts,
} from 'services/slice/shop'
import { useAppDispatch } from './redux/useAppDispatch'

export function useGetCategoryProducts(category: string) {
    const dispatch = useAppDispatch()

    const status = useSelector((state: RootState) => selectStatusCategoryProducts(state, category))
    const data = useSelector((state: RootState) => selectDataCategoryProducts(state, category))

    useEffect(() => {
        if (status === undefined) {
            dispatch(fetchInCategory(category))
        }
    }, [status, category, dispatch])

    const isUninitialized = status === undefined
    const isLoading = status === 'загрузка' || status === undefined
    const isError = status === 'ошибка'
    const isSuccess = status === 'успешно'

    return { data, isUninitialized, isLoading, isError, isSuccess }
}
