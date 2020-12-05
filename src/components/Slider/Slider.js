import React, { useState } from "react";
import "../../assets/css/slider.scss";
import ImgComp from "./ImgComp";
import i1 from "../../assets/img/i1.png";
import i2 from "../../assets/img/i2.png";
import i3 from "../../assets/img/i3.png";


function Slider() {
  const [x, setX] = useState(0);
  let sliderArr = [
    <ImgComp src={i1} />,
    <ImgComp src={i2} />,
    <ImgComp src={i3} />,
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  
  return (
    <div className="slider xl:h-75">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
             
          </div>
         
        );
      })}
      
      <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </button>
      <div className="palabras"><p>hola mundo</p></div>
    </div>
    
  );
}

export default Slider;
