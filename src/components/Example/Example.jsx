import React, { useState } from "react";
import { data } from "../../data";
import { gradientCode } from "../../utils";
import "./example.css";
import { Link } from 'react-router-dom'
const Example = ({ limit }) => {
  // eslint-disable-next-line
  const [state, setState] = useState({
    position: "0",
    rotation: "90",
    type: "linear",
  });

  //console.log(data);

  return (
    <div className="wrapper">
      <div className="heading">Some Random Gradients</div>
      <div className="gradients">
        {data.slice(0, limit).map((item, index) => (
          <div
            className="gradient"
            key={index}
            style={{
              background: `${gradientCode(state, item)}`,
            }}
          >
            <div className="left">
              <div className="left__color__code">{item[0].code}</div>
            </div>
            <div className="right">
              <div className="right__color__code">{item[0].code}</div>
            </div>
          </div>
        ))}
      </div>
      {limit && <Link className='see'  to="/randomBackground">See More</Link>}
    </div>
    
  );
};

export default Example;



               
              
                
          
