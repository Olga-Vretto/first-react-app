import React, { Component } from "react";
import Icons from "./Icons";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="main-container">
          <h1 className="main-title">
            The science of laughter and why it is good for us
          </h1>
          <p className="main-text">
            You may have heard that old saying, “Laughter is the best medicine.”
            Well, it turns out there really is some medicinal merit to a good
            guffaw. “Laughter is the physical manifestation of finding something
            funny, and it can help to reduce inflammation and stress hormones,
            improve circulation, and enhance the immune system,” says the
            Everyday Health Wellness Advisory Board member Heidi Hanna, PhD,
            founder of Synergy Brain Fitness, a consulting company that creates
            cognitive performance programs, and also a fellow of the American
            Institute of Stress.
          </p>
          <p className="main-text">
            Laughing changes brain activity, explains Hanna, who is also a
            certified humor professional with the Association for Applied and
            Therapeutic Humor, a nonprofit organization. Research that looked at
            the brain activity of people who were laughing showed that laughter
            can stimulate healing gamma waves, similar to those seen in
            long-term meditators. It is this effect on the brain that can
            improve your well-being in some surprising ways.
          </p>
          <p className="main-text">
            We advice you to laugh to have a good mood and to be healthy
            physically and mentally so you can read jokes clicking on button in
            the top right corner or you can contact us to make you laugh because
            we are professional jokers.
          </p>
          <div className="main-links">
            <a
              href="https://www.skiptomylou.org/funny-jokes/#h-300-funny-jokes"
              className="main-link"
            >
              Go to Laugh
            </a>
          </div>
          <>
            <Icons />
          </>
        </div>
      </main>
    );
  }
}
export default Main;
