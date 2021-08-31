import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

// fonts
import "@fontsource/raleway/latin.css";
import "@fontsource/inter/latin.css";

import App from "./App";

import { theme } from "./styles/customTheme";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
