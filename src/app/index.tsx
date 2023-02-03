import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { SnackbarProvider } from "notistack"

import { router } from "router"
import { store } from "services"

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <RouterProvider router={router} />
            </SnackbarProvider>
        </Provider>
    )
}

export default App
