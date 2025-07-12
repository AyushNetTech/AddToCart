import React from "react"
import "./Cart.css"
import Card from "./Card"

const Cart=({selectedcard})=>{
    
    return(
        <div className="Cart">
            {
                selectedcard.map((item,index)=>{
                    return <Card Title={item.Title} Image={item.Image} Price={item.Price} Rating={item.Rating} Index={index} showBtn={false} ShowQ={true}/>
                })
            }
        </div>
    )
}

export default Cart