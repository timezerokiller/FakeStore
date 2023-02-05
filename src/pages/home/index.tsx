import { AllProducts } from "pages/home/allProducts"
import { useState } from "react"

export const HomePage = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    return (
        <AllProducts
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            setTotalPages={setTotalPages}
        />
    )
}
