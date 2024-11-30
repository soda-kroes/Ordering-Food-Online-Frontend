
import React from 'react'
import EventCart from './EventCart'

const Events = () => {
  return (
    <div className='p-5 mt-5 px-5 flex flex-wrap gap-5'>
      {
        [1,1,1,1,1,1].map((item,index)=><EventCart />)
      }
    </div>
  )
}

export default Events