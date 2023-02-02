import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { getInCategory } from '../../shared/api/categories'
import { IProduct } from '../../shared/interface/product'
import { ProductCard } from '../../widget/components/card'
import { useGetCategoryProducts } from 'shared/hooks/useGetCategoryProducts'

export const CategoryPage = () => {
    const { categoryName } = useParams()
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined)

    if (categoryName) {
        const { data, isError, isLoading } = useGetCategoryProducts(categoryName)

        return (
            <div>
                <h1>{categoryName}</h1>
                <Grid container spacing={2}>
                    {data ? (
                        data.map((product, index) => (
                            <Grid item xs={4} key={index}>
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    ) : (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    )}
                </Grid>
            </div>
        )
    } else {
        return <p>Категория не найдена</p>
    }
}
