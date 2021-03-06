import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { withNamespaces } from 'react-i18next';

import Header from './components/shared/Header.js';

//login page
import Login from "./components/pages/auth/Login";

// employee pages
import Dashboard from "./components/pages/employee/EmployeeDashboard/Dashboard";
import CustomerDetails from "./components/pages/employee/CustomerDetails/CustomerDetails";

// admin pages
import adminDashboard from "./components/pages/admin/Dashboard/Dashboard";
import adminCustomers from "./components/pages/admin/customers/customers";
import adminUsers from "./components/pages/admin/users/users";
import userDetails from "./components/pages/admin/users/userDetails";
import adminData from "./components/pages/admin/data/data";

// supervisor
import supervisorDashboard from "./components/pages/supervisor/Dashboard"

function App({ t }) {
  return (
    <div className="App">
      <Router>
        <Header t={ t }/>
        <Switch>
          <Route exact path="/" render={ () => {
              window.location.href = "/Login";
            }
          } />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/EmployeeDashboard" component={Dashboard} />
          <Route exact path="/CustomerDetails" component={CustomerDetails} />

          <Route exact path="/AdminDashboard" component={adminDashboard} />
          <Route exact path="/AdminCustomers" component={adminCustomers} />
          <Route exact path="/AdminUsers" component={adminUsers} />
          <Route exact path="/UserDetails" component={userDetails} />
          <Route exact path="/AdminData" component={adminData} />

          <Route exact path="/SupervisorDashboard" component={supervisorDashboard} />

          <Redirect from="*" to={"/"} />
        </Switch>
      </Router>
    </div>
  );
}

export default withNamespaces()(App);
