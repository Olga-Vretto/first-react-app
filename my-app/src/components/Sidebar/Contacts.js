import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <a
          href="https://www.facebook.com/daily.jokes247/"
          className="sidebar-link"
        >
          facebook
        </a>
        <a
          href="https://www.instagram.com/just_4jokes/"
          className="sidebar-link"
        >
          instagram
        </a>
        <a href="tel:+05890000111" className="sidebar-link">
          Call us
        </a>
        <a href="mailto:youremail@domain.com" className="sidebar-link">
          Write us
        </a>
      </div>
    );
  }
}

export default Contacts;
