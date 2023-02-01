import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    EDITOR_ROUTE,
    USER_PANEL_ROUTE
} from "./utils/consts";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import PageTemplate from "./components/PageTemplate";
import Registration from "./pages/Registration";
import UserPanel from "./pages/UserPanel";

export const authRoutes = [
    {
        path: USER_PANEL_ROUTE,
        Component: UserPanel
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
]

export const publicRoutes = [
    {
        path: EDITOR_ROUTE + "/:id",
        Component: PageTemplate
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: ItemPage
    },
]
