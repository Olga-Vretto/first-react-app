import React, { Component } from "react";
import "./Sidebar.css";
import Contacts from "./Contacts";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="smile-img">
            <img
              src={require("../../assets/images/smile.png")}
              className="smile"
              alt="smile-pic"
            ></img>
          </div>
          <h2 className="sidebar-title">Contacts</h2>
          <>
            <Contacts />
          </>
          <img
            src={require("../../assets/images/1pic.png")}
            alt="pic1"
            className="sidebar-pic"
          ></img>
        </div>
      </div>
    );
  }
}

export default Sidebar;
