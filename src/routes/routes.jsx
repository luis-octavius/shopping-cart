import HomePage from "../pages/Homepage";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";
import ErrorPage from "../pages/ErrorPage"

const routes = [
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
    },
];

export default routes;