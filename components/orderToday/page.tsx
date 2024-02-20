
import Card from "../lottieplayer/page";


export default function Order(){

    return(
        <>
        <div className="flex justify-center  flex-col items-center text-xl font-semibold m-6"> 
       <div className="flex justify-start flex-col">
        {OrderItems.map((item, i) => (
           
        <div className="flex lg:justify-center sm:justify-start  w-full flex-row p-3 gap-2">
        <Card  src='tick'  css="w-[40px]" size="" loop={false} speed={0.5}  />
        <h1>{item.text}</h1>
        
</div>
        
      ))}
<h1 className="text-2xl p-2 text-center">🔥 Extra Surprises Inside 🔥</h1>

</div>
        </div>
        </>
    )
}



const OrderItems = [

{
    text:"174+ Animated Background"
},

{
    text:"Cinematic Overlays"
},
{
    text:"347+ Animated Icons"
},
{
    text:"Humor SFX Pack"
},

{
    text:"Graphic Design Bundle"
},
{
    text:"Cinematic Sound Effects Pack"
},

{
    text:"1200+ Canva Posts"
},

{
    text:"1000+ AI Reels (Both Hindi & English)"
},
{
    text:"9000+ ReadyMade Motivational Reels (Bonus*)"
},
{
    text:"6000+ Motivational Insta Stories (Bonus*)"
},
{
    text:"1500+ Done for you Motivational Post (Bonus*)"
},
{
    text:"90+ Sets of Hashtag (Bonus*)"
},
{
    text:"Instagram Growth E-book"
},

]