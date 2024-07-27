import React, { useEffect, useState } from 'react'
import img1 from "../Asset/download.jpeg"
import img2 from "../Asset/download (1).jpeg"
import img3 from "../Asset/download (2).jpeg"

function Design1() {

    const images = [img1 , img2 , img3];// to store the address of the images in the carousel. 
    const [index , setIndex] = useState(0); // to toggle the images in the carousel.

    useEffect(() => 
    console.log(index),[index]);

  return (
    <div className='border-black border-2 w-full h-screen flex flex-col justify-center items-center  '>
        <div className='h-3/4 w-11/12  flex flex-col justify-center items-center '>
        <img src={images[index]} alt='logo' width="100%" />  {/* this will render an individual image depending on the index value.*/}
        <div className=' w-full border-black h-8 flex justify-center items-center'>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'black' , marginRight:'10px' , cursor:'pointer' }} onClick={() =>setIndex(0)}></div> {/* onclick will set the index */}
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'black' , marginRight:'10px' , cursor:'pointer'}} onClick={() =>setIndex(1)}></div>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'black' , marginRight:'10px' , cursor:'pointer'}} onClick={() =>setIndex(2)}></div>
        </div>
        </div>

        <div className='text-black text-xl border-black border w-1/2 flex justify-center  mt-2 rounded-lg'>
            Button
        </div>
    </div>
  )
}

export default Design1