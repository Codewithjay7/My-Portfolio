import React from "react";
import "./Nav.css";

const About = () => {
  return (
    <div id="about">
      {/* FLEX only applied here */}
      <div className="about-flex flex">
        <img
          src="/images/About3.jpg"
          className="aboutImg"
          alt="Jay Chavda"
        />

        <div>
          <h1 style={{ fontSize: "15px" }}>
            Hello Everyone <span style={{ color: "cyan" }}>👋</span>
          </h1>
          <h1>I'm Jay Chavda</h1>
          <h1>
            I am a <span style={{ color: "cyan" }}>|</span>
          </h1>
          <hr className="hr" />
          <h3 style={{ fontSize: "23px" }}>
            <img src="/images/date1.png" className="imgs" />
            &nbsp;
            <h1 style={{ display: "inline", paddingRight: "100px" }}>
              18.11.2004
            </h1>
            <img src="/images/calling.png" className="imgs" />
            &nbsp;
            <h1 style={{ display: "inline", paddingRight: "100px" }}>
              73590 58058
            </h1>
            <img src="/images/email.png" className="imgs" />
            &nbsp; jay1971chavda@gmail.com
          </h3>
          <p>
            <img
              src="/images/loc.png"
              style={{ height: "30px", width: "30px", display: "inline" }}
            />
            <a style={{ fontSize: "20px", paddingRight: "100px" }}>
              Ahmedabad,India
            </a>

            <a
              href="https://linkedin.com/in/jay-chavda-09903a27a"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "lightblue", fontSize: "20px" }}
            >
              <img
              src="/images/linkedin.png"
              style={{ height: "20px", width: "20px", display: "inline" }}
            />
             &nbsp; linkedin.com/in/jay-chavda-09903a27a
            </a>
          </p>
        </div>
      </div>

      {/* BELOW THIS — NOT in flex */}
      <div style={{ marginTop: "30px", marginLeft: "100px" }}>
        <h3 style={{ textDecoration: "underline" }}>Career Objective</h3>
        <br />
        <p style={{fontSize:"20px",paddingLeft:"20px"}}>
          Motivated and self-taught IT student in 6th semester at Lok Jagruti
          University.
          <br />
          Skilled in Java, C, HTML, CSS, JavaScript, and React.js.
          <br />
          Seeking an entry-level IT role to apply technical knowledge,
          contribute innovative solutions, and gain industry experience.
        </p>
      </div>
    </div>
  );
};

export default About;
