import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AlarmPage from "./pages/AlarmPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/auth/sign/in" element={<LoginPage />} />
        <Route exact path="/alarm" element={<AlarmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
