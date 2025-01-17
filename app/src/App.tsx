import { BrowserRouter as Router } from "react-router-dom";

import defaultTheme from "./styles/defaultTheme";
import { ThemeProvider } from "./styles/ThemeProvider";
import Routes from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
