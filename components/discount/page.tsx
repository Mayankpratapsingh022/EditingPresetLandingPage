import ShiftingCountdown from "../countdown/page";
import Card from "../lottieplayer/page";

export default function Discount(){
  return(
    <>
    <div className="flex justify-center flex-col items-center">
 <Card  src="Price"  css="" size="" loop={true} speed={0.8} />
 <h1 className="text-4xl md:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100 bg-opacity-50 ">Offer Valid Till</h1>
 <ShiftingCountdown/>
 </div>
    </>
  )
}