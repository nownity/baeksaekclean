import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import MainPage from "./pages/MainPage";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

export default App;
