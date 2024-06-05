  import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
  import { ChakraProvider } from "@chakra-ui/react";
  import theme from './theme/styles';
  import "./styles/index.css"
  import { Provider } from 'react-redux';
  import store from './redux/index';

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  );