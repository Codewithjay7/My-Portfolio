import React from "react";

const Projects = () => {
  return (
    <div id="Projects">
      <h1 style={{ fontFamily: "Georgia", fontSize: "50px", color: "white" }}>
        {" "}
        Projects
      </h1>
      <hr className="hr"/>
      <br />
        <img src="/images/p_agms.jpg" className="ProjectImg"/>
        <br />
        <p className="project-text"> 
        This is my art gallery website made with PHP, JavaScript, HTML, and CSS.
        You can see different artworks here in a clean and easy-to-use layout.
        PHP helps run things on the server, JavaScript makes the site more
        interactive, and HTML/CSS make it look nice on any device.
      </p>
      <br />
      <hr className="hr"/>
      <br />
        <img src="/images/Art.jpg" className="ProjectImg"/>
        <br />
        <p className="project-text" > 
        This is my art gallery website made with Djanago, JavaScript, HTML, and CSS.
        You can see different artworks here in a clean and easy-to-use layout.
        PHP helps run things on the server, JavaScript makes the site more
        interactive, and HTML/CSS make it look nice on any device.
      </p>
      <br />
      <hr className="hr"/>
      <br />
        <img src="/images/p_hotel.jpg" className="ProjectImg"/>
        <br />
        <p className="project-text" > 
        This is a hotel booking site made with PHP, JavaScript, HTML, and CSS. Users can book rooms by entering their details. The site is easy to use, fast, and works on all devices.
      </p>
      <br />
      <hr className="hr"/>
      <br />
        <img src="/images/my-pf.png" className="ProjectImg"/>
        <br />
        <p className="project-text" > 
        This is my personal portfolio website built using React.js, JSX, HTML, and CSS. It showcases my projects, skills, and contact info in a clean and responsive design.

  </p>
      <br />
      <hr className="hr"/>
    </div>
  );
};

export default Projects;
