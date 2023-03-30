import  LoginPage from './pages/LoginPage'
//import MainPage from './pages/MainPage'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';


function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/main" element={<MainPage/>} />
            <Route exact path="/auth/sign/in" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
