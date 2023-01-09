import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ItemStore from "./store/ItemStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        item: new ItemStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

