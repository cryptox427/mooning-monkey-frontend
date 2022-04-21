import React from "react";
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink,
} from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";
import "./Dashboard.scss";
import gameImg from '../assets/images/playpage/game.png';
import BetTypeContainer from './playpage/BetTypeContainer';
import ChatAndHistory from './playpage/ChatAndHistory';
import Players from './playpage/Players';
import { Col, Row } from "react-bootstrap";

export const Dashboard = () => {
  const data = {
    chart1: {
      labels: ["Eating", "Drinking", "Sleeping"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ],
    },
    chart2: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ],
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard">
      <div style={{ height: "100%" }}>
        <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
          <div className="d-flex card-section">
            <div className="cards-container">
              <Row style={{width: '100%'}}>
                <Col sm={12} md={9}>
                  <div className="d-flex mb-2 flex-column md:flex-row">
                    <Row>
                      <Col sm={12} md={8}>
                        <div
                          className="mb-2 md:mb-0 bg"
                        >
                        </div>
                      </Col>
                      <Col sm={12} md={4}>
                        <div
                          className="d-flex flex-column mb-2 md:ml-2 md:mb-0"
                        >
                          <BetTypeContainer/>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flex-1 d-flex flex-column">
                    <div className="d-flex flex-column wide d-flex flex-column">
                      <ChatAndHistory/>  
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={3}>
                  <Players/>  
                </Col>
              </Row>
            </div>
          </div>
          <footer className="footer">
            <div className="d-flex align-items-center">
              <CDBLink to="/" className="text-dark footer-link">
                <img alt="logo" src="/img/pages/logo.png" width="25px" />
                <span className="ml-4 lead mb-0 font-weight-bold">
                  Devwares
                </span>
              </CDBLink>
              <span
                className="footer-rem"
                style={{
                  fontSize: "3em",
                  margin: "-2rem 0px -1.5rem 1rem",
                  color: "#C4C4C4",
                }}
              >
                &#8226;
              </span>
              <small className="ml-2 mt-1">
                &copy; Devwares, 2020. All rights reserved.
              </small>
            </div>
            <div className="footer-rem">
              <CDBBtn
                flat
                color="dark"
                className="py-1 px-2 bg-dark border-0"
              >
                <i className="fab fa-facebook-f"></i>
              </CDBBtn>
              <CDBBtn
                flat
                color="dark"
                className="mx-3 py-1 px-2 bg-dark border-0"
              >
                <i className="fab fa-twitter"></i>
              </CDBBtn>
              <CDBBtn
                flat
                color="dark"
                className="py-1 px-2 bg-dark border-0"
              >
                <i className="fab fa-instagram"></i>
              </CDBBtn>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
