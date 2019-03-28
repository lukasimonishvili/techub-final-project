import React from "react";
import slider1 from "../../img/slider1.png";
import slider2 from "../../img/slider2.jpg";
import slider3 from "../../img/slider3.png";
import slider4 from "../../img/slider4.jpg";
import slider5 from "../../img/slider5.jpg";
import slider6 from "../../img/slider6.jpg";

export class Slider extends React.Component {
  componentDidMount() {
    const slideParam = {
      mainContent: "slider",
      mainContentChildren: "slider__block",
      sliderTimer: 3000,
      bullets: false,
      bullet_cont: "sl_bullet",
      bullet_contChild: "sl_bulletBlocks",
      bullet_nopepeat: true
    };
    let sl_index = 0;
    let setTime;
    let elem = document.getElementsByClassName(slideParam.mainContentChildren);
    function slider(x, bullets) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].style.display = "none";
      }
      if (sl_index > elem.length - 1) {
        sl_index = 0;
      }
      if (sl_index < 0) {
        sl_index = elem.length - 1;
      }
      elem[sl_index].style.display = "flex";
      setTime = setTimeout(sl_right, slideParam.sliderTimer);
    }
    slider(sl_index, slideParam.bullets);
    function sl_right() {
      if (window.location.pathname == "/") {
        clearTimeout(setTime);
        slider(sl_index++, slideParam.bullets);
      }
    }
  }
  render() {
    return (
      <div className="slider">
        <div className="slider__block ">
          <img src={slider1} />
        </div>
        <div className="slider__block ">
          <img src={slider2} />
        </div>
        <div className="slider__block ">
          <img src={slider3} />
        </div>
        <div className="slider__block ">
          <img src={slider4} />
        </div>
        <div className="slider__block ">
          <img src={slider5} />
        </div>
        <div className="slider__block ">
          <img src={slider6} />
        </div>
      </div>
    );
  }
}
