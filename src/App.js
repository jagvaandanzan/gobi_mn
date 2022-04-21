import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/styles/Global.style";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants/theme";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>baihgui bn</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
