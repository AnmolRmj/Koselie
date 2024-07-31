import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Blog = () => {
  const navigate = useNavigate();
  
  const aboutClick = () => {
    navigate("/");
  }
  
  return (
    <div className='flex items-center justify-start'>
      <div className='container w-[400px]'>
        <div className='text-black font-extrabold text-4xl'>Journal</div> <br/>
        <div>
          <b>Koselie</b> is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style. It is an exclusive online clothing store brings you national and international fashion clothings, bags, shoes, and many more which will be a trendsetter to the fashion community.
        </div>
        <Button className='text-white bg-black' onClick={aboutClick}>Continue Shopping</Button>
      </div>
    </div>
  )
}
