
import Blockquote from "../Reviews/page";

export default function BlockReview(){
  
    return(
        <>
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
     
         {

Testimonials.map((item,i)=>(
    
 
        <div>
    <Blockquote img={item.image} review={item.review} name={item.name} /></div>
 
    )

)


         }

</div>
        </>
    )
}





const Testimonials = [

{
    name:"Ankit Chawla",
    review:"Thanks to your presets, my editing has reached new heights! The pack is incredibly useful!",
    image:"1.jpg"
}  ,
{
    name:"Nitin Arora",
    review:"After using your presets, my YouTube channel is experiencing an immediate surge! They're enhancing engagement and making my videos more captivating.",
    image:"2.jpg"
}  ,
{
    name:"Luke Melnyk",
    review:"An essential purchase for video editors and content creators! This product is a must-have,",
    image:"3.jpg"
}  ,
{
    name:"Anil Dutta",
    review:"Since using your presets, my freelance sales have doubled, and editing videos takes me less time! The pack is incredible",
    image:"4.jpg"
}  ,
{
    name:"Oliver Howells",
    review:"This pack is absolutely incredible—I'm beyond impressed! It's insane",
    image:"6.jpg"
}   ,
{
    name:"Amanda Kuo",
    review:"It's very useful and a must-have for your editing toolkit., right now i am using it in my videos, especially i loved the animated icons pack, the single thing that takes the vid to next level, and most of the suff is more that enough for a noob to become pro ",
    image:"7.jpg"
}  ,
{
    name:"Gaurav Naik",
    review:"I was unsure about buying it, but I took the chance—and it's amazing! These high-quality presets transformed my videos from mediocre to outstanding. I'll definitely be a loyal customer of their products.",
    image:"8.jpg"
}  ,  
{
    name:"Garima Bhaskar",
    review:"I can't believe this product is this much cheap, really impressed, each bundle such as animated icons, luts, sound effects, cinematic overlays are worth more that 300$ us dollars but getting it here for this low.",
    image:"5.jpg"
} 
]