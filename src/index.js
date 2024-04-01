import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from "./redux/reducer";
import AppPanel from "./components/AppPanel/AppPanel";

const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <main>
            <BrowserRouter>
                <AppPanel></AppPanel>
            </BrowserRouter>
        </main>
    </Provider>
);
