import React, { useState } from "react"
import "./Card.css"

const Card =({Title,Image, Price, Rating, handAddToCart, Index, showBtn, ShowQ})=>{

    const [quantity, setQuantity]=useState(0);
        
    const handleAddQ =()=>{
        setQuantity(quantity+1)
    }
    const handleMinsuQ=()=>{
        if(quantity===0){

        }
        else
            setQuantity(quantity-1)
    }
    
    const handleClick=()=>{
        handAddToCart(Index)
    }

    

    return(
        <div className="Card">
            <div className="Image">
                <img src={Image} alt="" />
            </div>
            <div className="Title">{Title}</div>
            <div className="PriceRating">
                <span className="Price">{Price}</span>
                <span className="Rating">Rating: {Rating}</span>
            </div>
            {showBtn && (<button className="btn" onClick={handleClick}>Add To Cart</button>)}
            {ShowQ &&
                <div className="Quantity">
                    <button className="AddQ" onClick={handleAddQ}>+</button>
                    <span className="QNo">{quantity}</span>
                    <button className="MinusQ" onClick={handleMinsuQ}>-</button>
                </div>
            }
        </div>
    )
}

export default Card