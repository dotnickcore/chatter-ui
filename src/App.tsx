import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Container>
          <h1>Dark Mode</h1>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
