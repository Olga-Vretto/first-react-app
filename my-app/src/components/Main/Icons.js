import React, { Component } from "react";

import { FaRegGrinStars } from "react-icons/fa";
import { FaRegGrin } from "react-icons/fa";
import { FaRegGrinHearts } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import { FaRegGrinSquintTears } from "react-icons/fa";

class Icons extends Component {
  render() {
    return (
      <div className="main-icons">
        <div className="icon">
          <FaRegGrinStars />
        </div>
        <div className="icon">
          <FaRegGrin />
        </div>
        <div className="icon">
          <FaRegGrinHearts />
        </div>
        <div className="icon">
          <FaRegSmileWink />
        </div>
        <div className="icon">
          <FaRegGrinSquintTears />
        </div>
      </div>
    );
  }
}

export default Icons;
