import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from '../src/home/footer'
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register"; 
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import BoardEditor from "./components/BoardEditor";
import BoardResearcher from "./components/BoardResearcher";
import AWorkshop from "./attendee/workshopRegistration/viewAttendeeRegistration";
import ApproveWS from "./workShop/viewWorkShop";
import AddEvents from "./editor/addEvent";
import TempletU from "./editor/TemplateUpload";
import ResDownload from "./TemplateDownload/TemlateDownload";
import EventAll from "./event/viewEvents";
import viewDetailedEvents from "./event/discriptedEvents";
import ResearchPayment from "./researcher/researchPayment/researchPayment";
import Wapproval from "./admin/workshop/viewWorkShops";
import WPayment from "./attendee/payment/attendeeWorkShopPayment";
import VPayment from "./attendee/payment/viewPayment";
import RegAtendee from "./admin/attendee/viewAttendee";
import VApayment from "./admin/attendee/viewAttendeeWorkShopPayments";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showEditorBoard, setShowEditorBoard] = useState(false);
  const [showResearcherBoard, setShowResearcherBoard] = useState(false);
  const [showWorkShopPresenter, setshowWorkShopPresenter] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
     setCurrentUser(user);
     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
     setShowEditorBoard(user.roles.includes("ROLE_EDITOR"));
     setShowResearcherBoard(user.roles.includes("ROLE_RESEARCHER"));
     setshowWorkShopPresenter(user.roles.includes("ROLE_USER"));
     
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Conference Planner
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {/* admin nav */}

          {showAdminBoard && (
            <li className="nav-item">
             
              <Link to={"/admin"} className="nav-link">
                Publication Approval
              </Link>
              <Link to={"/wapproval"} className="nav-link">
                Workshop Approval
              </Link>
            </li>
          )}


          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/vpayment"} className="nav-link">
                WorkShop Payment History
              </Link>
              <Link to={"/aWorkshop"} className="nav-link">
                WorkShop Rejected History
              </Link>
            </li>
          )}
          
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/vApayment"} className="nav-link">
                View Atendee Payment
              </Link>
              <Link to={"/RegAtendee"} className="nav-link">
                Registered attendee
              </Link>
            </li>
          )}



          {/* editor nav */}
          {showEditorBoard && (
            <li className="nav-item">
              <Link to={"/editor"} className="nav-link">
                Editor's Page
              </Link>
            </li>
          )}

          {showEditorBoard && (
            <li className="nav-item">
              <Link to={"/templetU"} className="nav-link">
                Template Upload
              </Link>
            </li>
          )}

          {showEditorBoard && (
            <li className="nav-item">
              <Link to={"/addEvents"} className="nav-link">
                Add Events
              </Link>
            </li>
          )}

          {/* researcher nav  */}
          {showResearcherBoard && (
            <li className="nav-item">
              <Link to={"/researchReg"} className="nav-link">
                Researcher Publication
              </Link>
            </li>
          )}

          {showResearcherBoard && (
            <li className="nav-item">
              <Link to={"/researchpayment"} className="nav-link">
                Research Payment
              </Link>
            </li>
          )}

          {/* User nav */}
          {showWorkShopPresenter && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Attend WorkShop
              </Link>
            </li>
          )}
       {showWorkShopPresenter && (
            <li className="nav-item">
              <Link to={"/wpayment"} className="nav-link">
                WorkShop Payment
              </Link>
            </li>
          )}

        {showWorkShopPresenter && (
            <li className="nav-item">
              <Link to={"/ApprovWS"} className="nav-link">
                Approved Workshop
              </Link>
            </li>
          )}

          
        {/* general public nav */}
          <li className="nav-item">
            <Link to={"/resDownload"} className="nav-link">
              Download
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/event"} className="nav-link">
              Events
            </Link>
          </li>
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                <b>{currentUser.username}</b>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/editor" component={BoardEditor} />          
          <Route path="/researchReg" component={BoardResearcher} />
          <Route path="/addEvents" component={AddEvents} />
          <Route path="/templetU" component={TempletU} />
          <Route path="/aWorkshop" component={AWorkshop} />          
          <Route path="/RegAtendee" component={RegAtendee} />
          <Route path="/resDownload" component={ResDownload} />      
          <Route path="/ApprovWS" component={ApproveWS} />
          <Route path="/event" component={EventAll} />
          <Route path="/researchpayment" component={ResearchPayment} />
          <Route path="/vApayment" component={VApayment} />
          <Route path="/wapproval" component={Wapproval} />
          <Route path="/wpayment" component={WPayment} />
          <Route path="/vpayment" component={VPayment} />
          <Route path="/:id" component={viewDetailedEvents} />
        </Switch>
      </div>


      <Footer />
    </div>
  );
};

export default App;
