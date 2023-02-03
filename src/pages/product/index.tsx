import { useParams } from "react-router-dom"

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"

import { useGetProduct } from "shared/hooks/useGetProduct"
import { Breadcrumbs } from "widget/components/breadcrumbs"

export const ProductPage = () => {
    const { productId } = useParams()

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

        return (
            <Container>
                <Stack spacing={2}>
                    <Breadcrumbs text={data?.title} id={data?.id} />
                    <h1>{data?.title}</h1>
                    <img src={data?.image} width="100%" height="100%" />
                    <p>
                        <strong>Категория:</strong> {data?.category}
                    </p>
                    <p>
                        <strong>Цена:</strong> {data?.price}$
                    </p>
                    <p>{data?.description}</p>
                </Stack>
            </Container>
        )
    }

    return <h1>ProductPage</h1>
}
