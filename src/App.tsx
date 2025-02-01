import { Container, createTheme, CssBaseline, Snackbar, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import React from "react";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";

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
          <Header />
          <Container>
              <Guard>
                <RouterProvider router={router} />
              </Guard>
          </Container>
          <Snackbar />
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
    </React.StrictMode>
  )
}

export default App
