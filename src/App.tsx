import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <Container>
            <RouterProvider router={router} />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
    </React.StrictMode>
  )
}

export default App
