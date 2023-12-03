import React from 'react';
import Service from '../Services/Service';
import propTypes, { element } from 'prop-types';
import Items from '../Items/Items';
import data from '../Header/data';
import './Deal.css';

const Deal = (props) => {
  return (
    <div className='Daily_deals_main_wrapper'>
        {/* <h1>{props.title}</h1> */}
        <div className='all_items'>
          {
            data.map((element,index)=>{
              return(
                <Items 
                  key={index}
                  image={element.img}
                  title={element.title}
                  star={element.star}
                  reviews={element.reviews}
                  prev_price={element.prevPrice}
                  new_price={element.newPrice}
                  company={element.company}
                  color={element.color}
                  category={element.category}
                />
              )
            })
          }
          
        </div>
    </div>
  )
}
Deal.propTypes = {
    title: propTypes.string
}
Deal.defaultProps ={
    title :"Enter Title"
}

export default Deal