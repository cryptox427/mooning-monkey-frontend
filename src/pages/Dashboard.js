import React from "react";
import "./Dashboard.scss";
import BetTypeContainer from './playpage/BetTypeContainer';
import MainChartComponent from "../components/MainChartComponent";
import AnimNumberDisplayer from "../components/MainChartComponent/AnimNumberDisplayer";

import ChatAndHistory from './playpage/ChatAndHistory';
import Players from './playpage/Players';
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn } from "mdb-react-ui-kit";

export const Dashboard = () => {
  const testMode = false;

  return (
    
    <div className="dashboard">
    {
      !testMode &&
      <>
        <div className="game-bet-chat-content">
          <div className="game-bet">
            <div className="game">
              <MainChartComponent />
            </div>
            <div className="bet">
              <div
                className="d-flex flex-column md:ml-2 mb-2 bet-wrapper"
              >
                <BetTypeContainer/>
              </div>
            </div>
          </div>
          <div className="flex-1 d-flex flex-column">
            <div className="d-flex flex-column wide d-flex flex-column">
              <ChatAndHistory/>  
            </div>
          </div>
        </div>
        <div className="players-content">
          <Players/>  
        </div>
      </>
    }
    </div>
        
  );
};
