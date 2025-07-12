import React from "react"
import "./Card.css"

const Card =({Title,Image, Price, Rating, handAddToCart, Index, showBtn})=>{
    
    const handleClick=()=>{
        handAddToCart(Index)
    }

    return(
        <div className="Card">
            <div className="Image">
                <img src={Image} alt="" />
            </div>
            <div className="Title">{Title}</div>
            <div className="Price">{Price}</div>
            <div className="Rating">{Rating}</div>
            {showBtn && (<button className="btn" onClick={handleClick}>Add To Cart</button>)}
        </div>
    )
}

export default Card