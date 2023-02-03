import './App.css';
import AuthProvider from './contexts/AuthContext';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from "./pages/register/Register"

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
          <Route exact path={"/"} element={<Home></Home>}/>
          <Route exact path={"/home"} element={<Home></Home>}/>
          <Route exact path={"/login"} element={<Login></Login>}/>
          <Route exact path={"/register"} element={<Register></Register>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
