import React, { useState } from 'react'

const Service = () => {
  const[start_num,increment] = useState(0);
  const decrement_fn = () =>{
    increment(start_num-1);
  }
  const increment_fn = () =>{
    increment(start_num+1);
  }
  return (
    <div className='Services_wrapper_section'>
        {
          (()=>{
              console.log('test');
          })()
        }
        <div className='Order_table'>
          <div className='order_image'>
            <img />
          </div>
          <div className='order_product_name'>
            <p></p>
          </div>
          <div className='product_total'>
            <p></p>
          </div>
          <div className='product_count'>
            <button className='decrement_count'onClick={decrement_fn}>-</button>
            <p className='counts'>{start_num}</p>
            <button className='increment_count'onClick={increment_fn}>+</button>
          </div>
        </div>
     </div>
  )
}

export default Service