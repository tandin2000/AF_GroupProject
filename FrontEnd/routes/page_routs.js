import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from '../components/footter/fotter';
import Navbar from '../components/navbar/navbar';
import Mainpage from '../components/Mainpage/mainpage';
import Login from '../components/Login/login';

import Admin from '../components/Admin/admin';

// UI Componentes

/*
import SignUp from '../pages/SignUp/Signup';

import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';

import UserProfilePage from '../pages/userProfile/userProfilePage';
import UserResource from '../pages/userResources/resources';
*/

function PageRoutes() {

    return (
        <div>
            <Router>
                <section>
                    <Switch>
                        <Route path="/" component={Mainpage} exact />
                        <Route path="/login" component={Login} />
                        <Route path="/admin" component={Admin} />
                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );


}


export default PageRoutes;