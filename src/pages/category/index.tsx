import { useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsInCategory } from "./productsInCategory"

export const CategoryPage = () => {
    const { categoryName } = useParams()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

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
