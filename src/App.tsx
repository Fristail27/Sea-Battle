import React from 'react';
import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import NewPasswordPage from './pages/newPasswordPage/NewPasswordPage';
import PasswordRecoveryPage from './pages/passwordRecoveryPage/PasswordRecoveryPage';
import TestPage from "./pages/testPage/TestPage";
import Error404 from "./pages/error404/Error404";
import Main from './pages/main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} render={()=> <Main/>}/>
        <Route path={"/login"} render={()=><Login/>}/>
        <Route path={"/registration"} render={()=><Registration/>}/>
        <Route path={"/profile"} render={()=><Profile/>}/>
        <Route path={"/new-password-page"} render={()=><NewPasswordPage/>}/>
        <Route path={"/password-recovery-page"} render={()=><PasswordRecoveryPage/>}/>
        <Route path={'/test-page'} render={ () => <TestPage/> }/>
        <Route path={'/error404'} render={ () => <Error404/> }/>
        <Redirect from={ '*' } to={'/error404'}/>
      </Switch>
    </div>
  );
}

export default App;
