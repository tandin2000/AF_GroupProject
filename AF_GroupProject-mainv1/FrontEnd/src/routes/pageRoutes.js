import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Components
import Home from "../home/home";
import NavBar from "../home/navBar";
import Footer from "../home/footer";
import Register from "../register/register";
import WorkShop from "../workShop/workShop";
import CreateWorkShop from "../workShop/createWorkShop";
import AttendeeWorkshopRegistration from "../attendee/attendeeWorkshopRegistration";
import AttendeeWorkShopPayment from "../attendee/attendeeWorkShopPayment";
import Researcher from "../researcher/researcher";
import Reviewer from "../reviewer/reviewer";


//   -------- Ruvindu added needed pages :--------------

import Editor from "../editor/editor";
import CreatEvent from "../editor/addEvent";
import viewEvents from "../event/viewEvents";
import viewDetailedEvents from "../event/discriptedEvents";


function PageRoutes() {
    return (
        <div>
            <Router>
                <NavBar />
                <section className="content">
                    <Switch>
                        <Route path="/reviewer" component={Reviewer}/>
                        <Route path="/researcher" component={Researcher}/>
                        <Route path="/editor" component={viewEvents}/>
                        <Route path="/workshop-payment" component={AttendeeWorkShopPayment}/>
                        <Route path="/workshop-attendee" component={AttendeeWorkshopRegistration}/>
                        <Route path="/create-workshop" component={CreateWorkShop}/>
                        <Route path="/workshop" component={WorkShop}/>
                        <Route path="/registration" component={Register}/>
                        <Route path="/" component={Home} exact/>

                        <Route path="/:id" component={viewDetailedEvents} />

                    </Switch>
                </section>
                <Footer/>
            </Router>
        </div>
    );
}

export default PageRoutes;

