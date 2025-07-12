import React, { useState } from "react"
import "./ProductCont.css"
import Card from "./Card"

const ProductCont=({Data, handAddToCart})=>{

    const [cards,setCards]=useState(Data)

    return(
        <div className="ProductCont">
            {
                cards.map((item,index)=>{
                    return <Card Title={item.Title} Image={item.Image} Price={item.Price} Rating={item.Rating} handAddToCart={handAddToCart} Index={index} showBtn={true}/>
                })
            }
        </div>
    )
}

export default ProductCont