import { title } from "process";
import { ThreeDCardDemo } from "../Product card/page";
import { Subtitles } from "lucide-react";

export default function Product(){
    return(
        <>
        <div className="px-5 flex lg:flex-row gap-6  sm:flex-col flex-wrap justify-center items-center">
        {ProductItems.map((item, i) => (
         <ThreeDCardDemo src={item.src} title={item.title} subtitle={item.subtitle}/>
      ))}

     
        </div>
        </>
        )
}



const ProductItems = [

    {
        src:"/background.webp",
        title:"Animated Abstract Background",
        subtitle:"174+ Background (.mp4 & gif)"
    },
    {
        src:"/funnySfx.webp",
        title:"Funny SFX",
        subtitle:"Collection of funny and trendy memes sound effects"
    },
    {
        src:"/overlyas.webp",
        title:"38+ Cinematic Overlays (.mp4)",
        subtitle:"Transform Your Films with Premium Cinematic Overlays - Editing Presets Every Filmmaker Needs!"
    },
    {
        src:"/icons.webp",
        title:"347+ Animated High Quality Icons (.gif)",
        subtitle:"Elevate Your Videos with Premium Icons - Consistent Brand Design, Perfect for Phone Editors!"
    },
    {
        src:"/Kinemaster.webp",
        title:"Kinemaster Editing App (Pro)",
        subtitle:"No introduction need!"
    },
    {
        src:"/Capcut.webp",
        title:"Capcut Editing App (Pro)",
        subtitle:"No introduction need!"
    },
    {
        src:"/cinematiSfx.webp",
        title:"Cinematic Sound Effects",
        subtitle:"Elevate Your Productions with Professional-grade Audio Magic!"
    },
    {
        src:"/luts.webp",
        title:"Cinematic LUTs",
        subtitle:"Color Grade your Video with just One Click"
    },
    {
        src:"/reeels.webp",
        title:"AI Reels (1000+)",
        subtitle:"Get the pack fo most trending Ai Reels, Both Hindi & English"
    },
    {
        src:"/canva.webp",
        title:"Canva Posts",
        subtitle:"Readymade Canva Post for your Instagram Account"
    },

    {
        src:"/fonts.webp",
        title:"Cinematic typography",
        subtitle:"Fonts hand picked for your upcoming videos (just make it more Cinematic)"
    },

 
    {
        src:"/graphics.webp",
        title:"Graphic Design (Bundle)",
        subtitle:"The Pack designed for Designers with Graphics elements and softwares"
    },
    {
        src:"/ebook.webp",
        title:"Insta Secret (ebook)",
        subtitle:"Get the book of Instagram algorithm strategies at your fingertips - tested strategies for success!"
    },

]  

