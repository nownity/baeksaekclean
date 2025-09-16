import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import CoatingPage from "./pages/CoatingPage";
import CleanPage from "./pages/CleanPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          />
          <Route path="/coating" element={<CoatingPage />} />
          <Route
            path="/clean"
            element={
              <CleanPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
