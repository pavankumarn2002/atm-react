import React from "react";
import data from "../data";
import Product from "./Product";
const PropsData = () => {
    return (
        <div className="container">
      <h1><u>Components And Props</u> :-</h1>
            <div className="row">
                {
                    data.map((eachContent) => {
                        const { id, title, url, thumbnailUrl } = eachContent
                        return (
                            <Product key={id} id={id} title={title} url={url} img={thumbnailUrl} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PropsData