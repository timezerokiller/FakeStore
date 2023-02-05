import { createBrowserRouter, createRoutesFromElements, Link, Route } from "react-router-dom"

import { CategoryPage } from "pages/category"
import { HomePage } from "pages/home"
import { ResponsiveTemplate } from "widget/template"
import { ProductPage } from "pages/product"
import { CardPage } from "pages/card"
import { useGetProduct } from "shared/hooks/useGetProduct"
import { getOneProductFromApi } from "services/api/product"

const AppLayout = () => (
    <>
        <ResponsiveTemplate />
    </>
)

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<AppLayout />}
            handle={{
                crumb: () => (
                    <Link key="home" to="/">
                        Home
                    </Link>
                ),
            }}
        >
            <Route index element={<HomePage />} />
            <Route
                path="category/:categoryName"
                element={<CategoryPage />}
                loader={async ({ params }) => {
                    return params.categoryName
                }}
                handle={{
                    crumb: (data: string) => (
                        <Link key={data} to={`/category/${data}`}>
                            {data}
                        </Link>
                    ),
                }}
            >
                <Route
                    path="product/:productId"
                    element={<ProductPage />}
                    loader={async ({ params }) => {
                        const productId = params.productId
                        if (productId) {
                            const data = await getOneProductFromApi(+productId)
                            return {
                                title: data.title,
                                id: data.id,
                                category: data.category,
                            }
                        }
                    }}
                    handle={{
                        crumb: (data: { title: string; id: number; category: string }) => {
                            return (
                                <Link
                                    key={data.title}
                                    to={`/category/${data.category}/product/${data.id}`}
                                >
                                    {data.title}
                                </Link>
                            )
                        },
                    }}
                />
            </Route>
            <Route
                path="card"
                element={<CardPage />}
                handle={{
                    crumb: () => {
                        return (
                            <Link key={"Card"} to={`/card`}>
                                Card
                            </Link>
                        )
                    },
                }}
            />
        </Route>
    )
)
