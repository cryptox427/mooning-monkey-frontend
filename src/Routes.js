import React, { Fragment } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import TransactionHistory from "./pages/TransactionHistory";
import TakStaking from "./pages/TakStaking";
import MonkeyEarning from "./pages/MonkeyEarning";
import ComicBookearnings from "./pages/ComicBookearnings";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import 'mdbreact/dist/css/mdb.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import {connect} from 'react-redux'
import Sidebar from "./Sidebar";
import Header from "./pages/layouts/Header.js";
import {setPopUp} from "./actions/gameActions";
import './Route.scss';

const Routes = (props) => {
  const {popup, setPopUp} = props
  const notify = () => toast.info(popup, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
  });
  useEffect(() => {
    if (popup !== "") {
        notify();
        setPopUp("")
    }
}, [popup]);
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
            

              <Route exact path="/"><Redirect to="/play"/></Route>
              <Route path="/play" render={() => <Dashboard /> } />
              <Route path="/transaction-history" render={() => <TransactionHistory /> } />
              <Route path="/tak-stak" render={() => <TakStaking /> } />
              <Route path="/monkey-earning" render={() => <MonkeyEarning /> } />
              <Route path="/bookearning" render={() => <ComicBookearnings /> } />
              <Route path="/tables" component={Tables} />
              <Route path="/hero404" component={Hero404} />
              
          </div>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

const mapStateToProps  = (state) => (
  {
    popup: state.betGameData.popup
  }
)
export default connect(mapStateToProps, {setPopUp})(Routes)
