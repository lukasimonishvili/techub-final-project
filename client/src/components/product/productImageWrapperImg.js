import React from "react"

export const ProductImageWrapperImg = () => {
    return  <img className="product__image--small" src="data:image/jpeg;base64,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" alt="" />
}