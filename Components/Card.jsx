import React from "react"
import "./Card.css"

const Card =({Title,Image, Price, Rating, handAddToCart, Index})=>{
    console.log(Image)
    return(
        <div className="Card">
            <div className="Image">
                <img src={Image} alt="" />
            </div>
            <div className="Title">{Title}</div>
            <div className="Price">{Price}</div>
            <div className="Rating">{Rating}</div>
            <button className="btn" onClick={handAddToCart}>Add To Cart</button>
        </div>
    )
}

export default Card