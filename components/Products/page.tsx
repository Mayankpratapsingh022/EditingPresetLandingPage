import { title } from "process";
import { ThreeDCardDemo } from "../Product card/page";
import { Subtitles } from "lucide-react";

export default function Product(){
    return(
        <>
        <div className="p-2">
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
        src:"/kinemaster.webp",
        title:"Kinemaster Editing App (Pro)",
        subtitle:"No introduction need!"
    },
]