import React, { useState } from "react";
import { useGlobalContext } from "./api/context"
import { BsStarFill ,BsCurrencyRupee} from 'react-icons/bs';


const Products = () => {

  const { product } = useGlobalContext();

  const [data , setData] = useState(product);

  const filterResult = (catItem) => {
    const result = product.filter((currData) => {
      return currData.category === catItem
    })

    setData(result)
  }

  return <div className="pt-32 bg-slate-100">
    <div className="flex flex-wrap mx-16 justify-center ">

    {
      product.map((currData) => {
        const { id, title, image, price, rating, rate } = currData;
        return (
          <>
            <div className='m-2 border-solid bg-yellow-100 border-2 border-yellow-500 rounded-md flex-col w-64 mx-5'>
                <img className='border-solid p-2 bg-yellow-100 w-48 h-60 mx-auto' src={image} alt='' />
                <div className='m-2 mt-3' key={id}>
                    <p className='font-bold text-xl'>{currData.title ? currData.title.slice(0, 20) : ""}</p>
                    {/* <p className='text-sm font-medium mt-1'>{company}</p> */}
                    <p className='flex mt-2 text-lg font-bold'> Rating = {rating.rate} <BsStarFill className="mt-1 mx-1"/> </p>
                    <p className='flex text-3xl font-semibold mt-3'> <BsCurrencyRupee className='mt-2' size={25} /> {price}</p>
                    <button className='bg-yellow-400 hover:bg-yellow-50 hover:border-2 border-2 hover:border-yellow-500 text-lg rounded-md px-[4rem] mx-auto py-1 font-bold mt-6'> Add to Cart</button>
                    <button className='bg-yellow-400 hover:bg-yellow-50 hover:border-2 border-2 hover:border-yellow-500 text-lg rounded-md px-[4.5rem] mx-auto py-1 font-bold mt-4'> Buy Now</button>
                </div>
            </div>
          </>
        )
      })
    }
        </div>

        <button onClick={() => filterResult("jewelery")}>click</button>
  </div>;
};

export default Products;
