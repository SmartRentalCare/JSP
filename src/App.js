import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AlarmPage from "./pages/AlarmPage";
import Client from "./pages/Client";
import Modal from "./pages/Modal";
import CountPage from "./pages/CountPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/auth/sign/in" element={<LoginPage />} />
        <Route exact path="/alarm" element={<AlarmPage />} />
        <Route exact path="/client" element={<Client />} />
        <Route exact path="/modal" element={<Modal />} />
        <Route exact path="/count" element={<CountPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
