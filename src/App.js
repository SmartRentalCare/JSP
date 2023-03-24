import  LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import { Component } from 'react'

import {BrowserRouter,Routes, Route} from 'react-router-dom'

class App extends Component {
  
  render() {
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/main" element ={<MainPage/>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
      
    )
  }


}
