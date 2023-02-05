import { useEffect } from "react"

import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

import { useGetAllProducts } from "shared/hooks/useGetAllProducts"
import { ProductCard } from "widget/components/card"
import { BasicPagination } from "widget/components/pagination"
import { Breadcrumbs } from "widget/components/breadcrumbs"

type Props = {
    page: number
    totalPages: number
    setTotalPages: React.Dispatch<React.SetStateAction<number>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export const AllProducts = ({ page, totalPages, setTotalPages, setPage }: Props) => {
    const { data, isError, isLoading } = useGetAllProducts()

    useEffect(() => {
        if (data) {
            let total = Math.round(data.length / 10)
            setTotalPages(total === 0 ? 1 : total)
        }
    }, [data])

    if (isLoading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Stack>
            <h1>All Products</h1>
            <Grid container spacing={2}>
                {data ? (
                    data.slice(page * 10 - 10, page * 10).map((product, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                <ProductCard product={product} />
                            </Grid>
                        )
                    })
                ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress />
                    </Box>
                )}
            </Grid>
            <br />
            <BasicPagination count={totalPages} page={page} setPage={setPage} />
        </Stack>
    )
}
