import './App.css';
import AuthProvider from './contexts/AuthContext';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from "./pages/register/Register"
import Grievances from './pages/grievances/Grievances';
import Profile from './pages/profile/Profile';
import Error from './pages/Error/Error';

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
          <Route exact path={"/grievances"} element={<Grievances></Grievances>}/>
          <Route exact path={"/profile"} element={<Profile></Profile>}/>
          <Route exact path={"/*"} element={<Error></Error>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
