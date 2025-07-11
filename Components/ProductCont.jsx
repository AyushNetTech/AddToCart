import React, { useState } from "react"
import "./ProductCont.css"
import Card from "./Card"

const ProductCont=({Data})=>{

    const [cards,setCards]=useState(Data)
    const [addtocart,setaddtocart]=useState()

    const handAddToCart=()=>{
        setaddtocart()
    }

    return(
        <div className="ProductCont">
            {
                cards.map((item,index)=>{
                    return <Card Title={item.Title} Image={item.Image} Price={item.Price} Rating={item.Rating} handAddToCart={handAddToCart} Index={index}/>
                })
            }
        </div>
    )
}

export default ProductCont