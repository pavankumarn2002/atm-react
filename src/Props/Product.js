import React from "react";
const Product = (prop) => {
    const { id, title,img } = prop
    return (
        <div className="col-4 thumb-nail">
            <h4>{id}</h4>
            <img src={img} alt="No Content"/>
            <p>{title}</p>
        </div>
    )
}
export default Product;