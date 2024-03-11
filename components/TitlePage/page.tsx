import React from "react";
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/Spotlight";
import HeroAnimaton from "../HeroAnimation/page";


export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full flex-col  justify-center items-center rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
<div className="w-10/12 lg:w-3/12 flex items-center" id="he">
  <div className="flex justify-center items-center ">
<HeroAnimaton/></div></div>
      <div className=" p-1 max-w-7xl  mx-auto relative z-10 w-full pt-1 md:pt-0">

        <h1 className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-secondColor to-green-300 bg-opacity-50 p-2">
          Elevate <br />Your Editing
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        All the things you need to create a epic video <br></br>
  <i>    
Unlock your potential as a top-tier creator or freelancer with our game-changing video presentation pack.</i>  
        </p>
      </div>
    </div>
  );
}
