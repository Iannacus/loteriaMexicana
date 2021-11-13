import React from 'react';
import Carousel from 'react-elastic-carousel';

const CardCarousel = ({onClickClose, children}) => {
  console.log(children)
  return (
    <div className='carousel-container'>
      <div 
        className='close' 
        onClick={
          () => 
            {
              onClickClose(false)
            }
          }
        >
          X
        </div>
      <Carousel itemsToShow={2}>
        {children}
      </Carousel>
      
    </div>
  )
}

export default CardCarousel;