import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./redux/store";

const container = document.getElementById("attex");
if (container) {
    const root = createRoot(container);
    root.render(
        // <React.StrictMode>
        <Provider store={store}>
            <React.Fragment>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <App />
                </BrowserRouter>
            </React.Fragment>
        </Provider>
        // </React.StrictMode> 
    );
}

