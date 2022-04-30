import React, { Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import TakStaking from "./pages/TakStaking";
import MonkeyEarning from "./pages/MonkeyEarning";
import ComicBookearnings from "./pages/ComicBookearnings";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";

import Sidebar from "./Sidebar";
import Header from "./pages/layouts/Header.js";
import './Route.scss';

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <div className="content d-flex">
          <Sidebar />
          <div
              style={{
                flex: "1 1 auto",
                display: "flex",
                flexFlow: "column",
                overflowY: "scroll",
              }}
            >
            

              <Route path="/play" render={() => <Dashboard/> } />
              <Route path="/transaction-history" render={() => <TransactionHistory /> } />
              <Route path="/tak-stak" render={() => <TakStaking /> } />
              <Route path="/monkey-earning" render={() => <MonkeyEarning /> } />
              <Route path="/bookearning" render={() => <ComicBookearnings /> } />
              <Route path="/tables" component={Tables} />
              <Route path="/hero404" component={Hero404} />
              <Redirect to="/play"/>
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
