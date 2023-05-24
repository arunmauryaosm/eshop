import React, { useState } from 'react'
import { useGlobalContext } from './api/context'
import { BsCurrencyRupee } from 'react-icons/bs';


const Home = () => {

  const {product} = useGlobalContext()
  
  const getUniqueData = (data) => {
    let newVal = data.map((currElem) => {
      return currElem.category
    })
  console.log(newVal)   // it will give all data of filter
  const  newa = [...new Set(newVal)]
  console.log(newa) // it will give only once filter data
  }

  
  const categoryData = getUniqueData(product);


  return (
    <div>

      <p className='text-center my-10  text-4xl font-bold font-serif '>Women Fashion</p>


      <div className='flex flex-wrap mx-12 justify-center'>


      

      </div>

    </div>
  )
}

export default Home
