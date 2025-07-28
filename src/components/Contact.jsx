import React, { useState } from "react";
import "../index.css";
import SocialLinks from "./SocialLinks";
const Contact = () => {
  
  const [submitted, setSubmitted] = useState(false);
  
  return ( 
    <div id="contact" className="contact">
      <header>
    <h2  style={{ fontFamily: "Georgia", fontSize: "30px", color: "white" }}>Contact Me</h2>
<p>Have a project or just want to say hi? Feel free to reach out!</p>

        </header>
        <br />
        <br />
      {!submitted ? (
        <form
          action="https://formspree.io/f/mqalbenv" 
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
         
         
          <div className='contact-form bg-black'>
          <input type="text" className="form" placeholder="Enter Your Name" required />
          <input type="email" className="form" placeholder="Enter Your Email" required />
          <textarea className="form" placeholder="Your Message" required></textarea>
          <button type="submit" style={{backgroundColor:"white",color:"black",borderRadius: "8px"}}>Send Message</button>
        
         
            </div>
          
        </form>
      ) : (
        
        alert("Thank you! Your message has been sent.")
      )}
       <SocialLinks />
    </div>
  );
};

export default Contact;
