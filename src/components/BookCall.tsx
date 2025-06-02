import React from 'react'
import BgImage from '@/assets/Tezzeract-Background.webp'





function BookCall() {
  return (
<div className="flex w-full h-screen">
  {/* Left Side */}
  <div
    className="w-1/2 h-full bg-cover bg-center relative"
    style={{ backgroundImage: `url(${BgImage})` }}
  >
   
  </div>

  

  {/* Right Side */}
  <div className="w-1/2 h-full flex flex-col p-[100px] justify-center bg-white ">
  <h2 className="tezzeracth2 text-4xl md:text-5xl font-display font-light text-white mb-4 !leading-tight">
  Take the first step to scale your company
</h2>


          <iframe
    src="https://meet.brevo.com/thefind-hotel/borderless?l=30-minute-meeting"
    className="w-full h-[600px] border-0 "
    title="Brevo Booking Form"
  ></iframe>

  
  </div>
</div>
  )
}

export default BookCall;
