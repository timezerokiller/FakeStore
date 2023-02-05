import { createBrowserRouter, createRoutesFromElements, Link, Route } from "react-router-dom"

import { CategoryPage } from "pages/category"
import { HomePage } from "pages/home"
import { ResponsiveTemplate } from "widget/template"
import { ProductPage } from "pages/product"
import { CardPage } from "pages/card"

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
                crumb: () => <Link to="/">Home</Link>,
            }}
        >
            <Route index element={<HomePage />} />
            <Route
                path="category/:categoryName"
                element={<CategoryPage />}
                handle={{
                    crumb: (data: string, categoryId: string) => (
                        <Link to={`/category/${categoryId}`}>{data}</Link>
                    ),
                }}
            >
                <Route
                    path="product/:productId"
                    element={<ProductPage />}
                    handle={{
                        crumb: (data: string, productId: number) => {
                            return <Link to={`/product/${productId}`}>{data}</Link>
                        },
                    }}
                />
            </Route>
            <Route
                path="card"
                element={<CardPage />}
                handle={{
                    crumb: () => {
                        return <Link to={`/card`}>CardPage</Link>
                    },
                }}
            />
        </Route>
    )
)
