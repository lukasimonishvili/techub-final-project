import React from "react";

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
          <img src="https://cdn.techjuice.pk/wp-content/uploads/2019/02/2019-02-21.png" />
        </div>
        <div className="slider__block ">
          <img src="https://assets2.razerzone.com/images/rzr-ph/rzph-og-image-1200x630.jpg" />
        </div>
        <div className="slider__block ">
          <img src="https://cdn.wccftech.com/wp-content/uploads/2017/06/Intel-Core-X-Series-Skylake-X-and-Kaby-Lake-X-CPU-Family.png" />
        </div>
        <div className="slider__block ">
          <img src="https://cdn.mos.cms.futurecdn.net/SY82Ar3e4Wcnnc3SoPnsYS.jpg" />
        </div>
        <div className="slider__block ">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/M/Q0/MQ052/MQ052?wid=4000&hei=1800&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1495129815011" />
        </div>
        <div className="slider__block ">
          <img src="https://www.reviewgeek.com/p/uploads/2018/01/x7dcedf8d.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.hNos-NXDT-.jpg" />
        </div>
      </div>
    );
  }
}
