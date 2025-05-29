import React from 'react';
import { Button } from '@/components/ui/button';
import TezzeractBrick from '@/assets/tezzeractbrick.webp';

const GrowthCTA = () => {
  return (
    <div
      className="h-[60vh] bg-gradient-to-l from-[#00A9EE] rounded-t-[20px] overflow-hidden to-[#00378A]"
      style={{
        backgroundImage: `url(${TezzeractBrick}), linear-gradient(to left, #00A9EE, #00378A)`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: '110% 20%, center',
        backgroundSize: '50%, cover',
      }}
    >
      <div className="w-[70%] self-center mx-auto h-full flex flex-col items-start justify-center text-left">

        <div className="w-[50%]">

        <h1 className="tezzeracth1 leading-[80px]">
        Ready to Transform Your Business?
        </h1>

        <p className="text-1xl font-thin text-white leading-relaxed">
        Don't let manual processes hold you back. Our automation experts are ready to design a custom solution that will streamline your operations and accelerate your growth.
        </p>

      
              <Button
                className="bg-gradient-to-r mt-5 from-white to-[#D8F4FF] hover:bg-gradient-to-tr hover:from-[#00378AB0] hover:to-[#00A9EE] shadow-[0_0px_70px_0_rgba(255,255,255,0.22)] hover:shadow-[0_-5px_70px_0_rgba(255,255,255,0.22)] border border-[#FFFFFF7A] rounded-xl text-[#005D8A] font-thin hover:text-white text-base transition-all duration-300 px-8 py-6"
              >
                Book a Free Strategy Call
              </Button>


        

        </div>
       

      </div>
    </div>
  );
};

export default GrowthCTA;