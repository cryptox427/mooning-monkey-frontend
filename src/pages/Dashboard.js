import React from "react";
import "./Dashboard.scss";
import BetTypeContainer from './playpage/BetTypeContainer';
import MainChartComponent from "../components/MainChartComponent";
import ChatAndHistory from './playpage/ChatAndHistory';
import Players from './playpage/Players';
import { Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Dashboard = () => {
  const testMode = false;

  return (
    
    <div className="dashboard">
      {
      !testMode &&
      <div style={{ height: "100%" }}>
        <div>
          <div className="d-flex card-section">
            <div className="cards-container">
              <Row style={{width: '100%'}}>
                <Col xxl={8} xl={12} className="pr-0">
                  <Row className="m-0 mb-4">
                    <Col lg={12} xl={8} className="p-0 mb-2 d-flex flex-column">
                      <MainChartComponent />
                    </Col>
                    <Col lg={12} xl={4} className="pr-lg-0 pl-xl-match mb-2">
                      <div
                        className="d-flex flex-column md:ml-2 mb-2 bet-wrapper"
                      >
                        <BetTypeContainer/>
                      </div>
                    </Col>
                  </Row>
                  <div className="flex-1 d-flex flex-column">
                    <div className="d-flex flex-column wide d-flex flex-column">
                      <ChatAndHistory/>  
                    </div>
                  </div>
                </Col>
                <Col xxl={4} xl={12} className="pr-0">
                  <Players/>  
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
}
    </div>
        
  );
};
