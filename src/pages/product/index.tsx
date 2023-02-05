import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import { useGetProduct } from "shared/hooks/useGetProduct"
import { Breadcrumbs } from "widget/components/breadcrumbs"
import { useAppDispatch } from "shared/hooks/redux/useAppDispatch"
import { resetStatusByProduct } from "services/slice/shop"

export const ProductPage = () => {
    const { productId } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        return () => {
            dispatch(resetStatusByProduct())
        }
    }, [])

    if (productId) {
        const { data, isError, isLoading } = useGetProduct(+productId)

        if (isLoading) {
            return (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )
        }

        if (isError) {
            return <p>Ошибка</p>
        }

        if (data) {
            return (
                <Container>
                    <Stack spacing={2}>
                        <Breadcrumbs />
                        <h1>{data.title}</h1>
                        <img src={data.image} width="100%" height="100%" />
                        <p>
                            <strong>Категория:</strong> {data.category}
                        </p>
                        <p>
                            <strong>Цена:</strong> {data.price}$
                        </p>
                        <p>{data.description}</p>
                    </Stack>
                </Container>
            )
        } else {
            return (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )
        }
    }

    return <h1>ProductPage</h1>
}
