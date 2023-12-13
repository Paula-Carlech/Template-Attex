import React from "react";

import AllRoutes from "./routes/Routes";

import { configureFakeBackend } from "./helpers/fake-backend";

import "./assets/scss/app.scss";
import "./assets/scss/icons.scss";

import 'bootstrap/js/dist/scrollspy'

// configure fake backend
configureFakeBackend();

function App() {
  return (
    <>
      <React.Fragment>
        <AllRoutes />
      </React.Fragment>
    </>
  );
}

export default App;
