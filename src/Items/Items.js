import React from 'react'
import './items.css'

const Items = (props) => {
  return (
        <div className='item'>
            <img className="product_img" src={props.image}/>
            <p className='product_name'>{props.title}</p>
            <p className='ratings_and_reviews'><span>{props.star}</span><span>{props.reviews}</span></p>
            <div className='Price_and_cart'>
                <p><span>{props.prev_price}</span><span>{props.new_price}</span></p>
                <p className='add_to_cart'>Add to cart</p>
            </div>
        </div>
  )
}

export default Items