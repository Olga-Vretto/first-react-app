import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-links">
          <a
            href="https://www.bbc.com/news/health-37311320"
            className="header-link"
          >
            Read More
          </a>
          <a
            href="https://www.skiptomylou.org/funny-jokes/#h-300-funny-jokes"
            className="header-link"
          >
            Read Jokes
          </a>
        </div>
        <div className="contact"></div>
      </div>
    </div>
  );
};

export default Header;
