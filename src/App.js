import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SmokingPage from "./pages/SmokingPage";
import DrinkPage from "./pages/DrinkPage";
import CollisonPage from "./pages/CollisionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/auth/sign/in" element={<LoginPage />} />
        <Route exact path="/drink" element={<DrinkPage />} />
        <Route exact path="/smoke" element={<SmokingPage />} />
        <Route exact path="/collision" element={<CollisonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
