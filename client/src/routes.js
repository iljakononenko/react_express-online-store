import Admin from "./pages/Admin/Admin";
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    EDITOR_ROUTE,
    USER_PANEL_ROUTE,
    MANAGER_ROUTE,
    ADMIN_LOGIN_ROUTE,
    ADMIN_ORDERS_ROUTE,
    ADMIN_CUSTOMERS_ROUTE,
    ADMIN_PRODUCTS_ROUTE,
    ADMIN_SETTINGS_ROUTE
} from "./utils/consts";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import SiteEditor from "./components/Admin/SiteEditor";
import Registration from "./pages/Registration";
import UserPanel from "./pages/UserPanel";
import SiteManager from "./pages/Admin/SiteManager";
import AuthAdmin from "./pages/Admin/AuthAdmin";
import Orders from "./pages/Admin/Orders";
import Products from "./pages/Admin/Products";
import Customers from "./pages/Admin/Customers";
import Settings from "./pages/Admin/Settings";

export const adminRoutes = [
    {
        path: MANAGER_ROUTE,
        Component: SiteManager
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: EDITOR_ROUTE + "/:id",
        Component: SiteEditor
    },
    {
        path: ADMIN_ORDERS_ROUTE,
        Component: Orders
    },
    {
        path: ADMIN_PRODUCTS_ROUTE,
        Component: Products
    },
    {
        path: ADMIN_CUSTOMERS_ROUTE,
        Component: Customers
    },
    {
        path: ADMIN_SETTINGS_ROUTE,
        Component: Settings
    },
]

export const authRoutes = [
    {
        path: USER_PANEL_ROUTE,
        component_id: 12
    },
    {
        path: CART_ROUTE,
        component_id: 13
    },
]

export const coreRoutes = [
    {
        path: ADMIN_LOGIN_ROUTE,
        Component: AuthAdmin
    }
]

export const publicRoutes = [
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
