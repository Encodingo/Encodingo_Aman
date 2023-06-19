import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
// import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
// import "./assets/css/style.css"
//  import "./index.css";
import "remixicon/fonts/remixicon.css";
import "react-circular-progressbar/dist/styles.css";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import App from "./App";

// for user alert
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// alert template
// import AlertTemplate from "react-alert-template-basic";

// set position at bottom ,time for 5 seconds and transtion of alert pop up
// const options = {
//   timeout: 5000,
//   position: positions.BOTTOM_CENTER,
//   transition: transitions.SCALE,
// };

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
  </StrictMode>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <AlertProvider template={AlertTemplate} {...options}>
//       <App />
//     </AlertProvider>
//   </Provider>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
