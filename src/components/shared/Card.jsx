// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = (props) => {

  // eslint-disable-next-line react/prop-types
  const {img, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300">
              <img src={img}
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
              <p className="text-xl">{description}</p>
              <span className="text-gray-400">${price}</span>
              <p className="text-gray-500">{inventory} Bols available</p>
            </div>
   
  )
}

export default Card