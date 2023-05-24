import React from 'react'
import { useGlobalContext } from './api/context'

const Contact = () => {

  const { product } = useGlobalContext();
  console.log(product)

  return (
    <div>
      contact

      {
        product.map((currData) => {
          const { id, title, image } = currData;
          return(
            <>{title}</>
          )
        })
      }
    </div>
  )
}

export default Contact
