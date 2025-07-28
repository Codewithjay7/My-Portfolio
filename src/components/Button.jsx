import { workLink } from "../constants";

const Button = ({ text, className, id }) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`} >
      <div className="cta-button group">
      {workLink.map(({link })=>(
        <a href={link} >
        <div className="bg-circle" />
          <p className="text">{text}</p>
      
          <div className="arrow-wrapper ">
            <a href="/Projects" >
            <img src="images/arrow-down.svg" alt="arrow" /> 

            </a>
          </div>
          </a>
      ))}
        </div>
   
    
       
    </a>
  );
};

export default Button;
