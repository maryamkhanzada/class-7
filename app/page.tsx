
import Image from "next/image";
 
import React from "react";

const Home = () => {
  return (
    <div className="bg-red h-screen flex items-center">
      <div className="flex flex-col gap-4 justify-center px-4 w-1/2 h-28">
      <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
      <p className="font-normal text-[32px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
        </p>
        <button className="text-white w-[237px] h-[66px] p-4 bg-black"> Contact Us</button>
     </div>
    
     <div >
          <Image  
          src="/abc.jpg" 
          alt="" 
          width={502}
          height={500}
          />

        </div>
        </div>
        
         
  );
};

export default Home;
   
