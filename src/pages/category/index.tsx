import { useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { ProductsInCategory } from "./productsInCategory"

export const CategoryPage = () => {
    const { categoryName, productId } = useParams()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    if (productId) {
        return <Outlet />
    }

    if (categoryName) {
        return (
            <ProductsInCategory
                categoryName={categoryName}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
            />
        )
    } else {
        return <p>Категория не найдена</p>
    }
}
