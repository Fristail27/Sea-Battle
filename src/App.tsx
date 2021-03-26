import React, {useEffect} from 'react';
import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Registration from "./pages/registration/Registration";
import Profile from "./pages/profile/Profile";
import NewPasswordPage from './pages/newPasswordPage/NewPasswordPage';
import PasswordRecoveryPage from './pages/passwordRecoveryPage/PasswordRecoveryPage';
import TestPage from "./pages/testPage/TestPage";
import Error404 from "./pages/error404/Error404";
import {LoginContainer} from "./pages/login/LoginContainer";
import {Navigations} from "./common/Navigation/Navigation";
import {useDispatch} from "react-redux";
import {meRequestTC} from "./store/auth-Reducer";
import {Packs} from "./pages/Packs/Packs";
import {Cards} from "./pages/Cards/Cards";
import {LearnCards} from "./pages/LearnCards/LearnCards";

function App() {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(meRequestTC())
    },[])

  return (
    <div className="App">
      <Navigations/>
      <Switch>
        <Route path={"/profile"} render={()=> <Profile/>}/>
        <Route path={"/login"} render={()=><LoginContainer/>}/>
        <Route path={"/registration"} render={()=><Registration/>}/>
        <Route path={"/new-password-page/:token"} render={()=><NewPasswordPage/>}/>
        <Route path={"/password-recovery-page"} render={()=><PasswordRecoveryPage/>}/>
        <Route path={'/test-page'} render={ () => <TestPage/> }/>
        <Route path={'/error404'} render={ () => <Error404/> }/>
        <Route path={'/packs'} render={ () => <Packs/> }/>
        <Route path={'/cards/:id?'} render={ () => <Cards/> }/>
        <Route path={'/learn-cards/:id'} render={ () => <LearnCards/> }/>
        <Redirect exact from={"/"} to={"/profile"}/>
        <Redirect from={ '*' } to={'/error404'}/>
      </Switch>
    </div>
  );
}

export default App;
