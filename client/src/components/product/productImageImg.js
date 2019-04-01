import React from "react";
import ReactImageMagnify from 'react-image-magnify';

export const ProductImageImg = props => {
  let photo = require(`../../img/uploads/${props.mainImg}`);
  return <ReactImageMagnify className="product__image__zoom" {...{
    smallImage: {
        alt: '',
        isFluidWidth: false,
        src: photo,
        width: 350,
        height: 350
    },
    largeImage: {
        src: photo,
        width: 800,
        height: 800,
      },
      enlargedImagePosition: "over",
      // touch screen zoom
      // isActivatedOnTouch: true,
      // pressDuration: 500
}} />
};
