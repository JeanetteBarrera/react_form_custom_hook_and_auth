import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../components/Login/FormLogin';
import Register from '../components/Register/FormRegister';
import Home from '../components/Home/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;