import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ItemStore from "./store/ItemStore";
import CartStore from "./store/CartStore";
import AdminStore from "./store/AdminStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        admin: new AdminStore(),
        item: new ItemStore(),
        cart: new CartStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

