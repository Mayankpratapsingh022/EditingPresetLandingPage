
import Image from 'next/image'

export default function Step(){
 
   const Steps = [

{
    step:"Step-1",
    text:"Click on any Download Button and you will redirect to checkout page.",
    icon:"/shop.svg"

},
{
    step:"Step-2",
    text:"Fill your correct details and complete payment.",
    icon:"/info.svg"

},

{
    step:"Step-3",
    text:"You will redirect to thank you page. You will get PDF where each and every product link will be exist, so you can download it anytime.",
    icon:"/file.svg"

},


   ] 



    return(
        <>
<div className="">
  <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
    <div className="text-center">
      <p className="mt-4 text-sm leading-7 text-gray-200 font-regular">
        STEPS
      </p>
      <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
        How To <span className="text-secondColor">Download?</span>
      </h3>
    </div>
    <div className="mt-20">
      <ul >
{
   Steps.map((item,i)=>(
    <>
    <li className="  p-5 pb-10 text-center mb-20">
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 relative top-0 -mt-16">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondColor text-white border-4 border-white text-xl font-semibold">
              <Image
      src={`${item.icon}`}
      width={30}
      height={20}
      alt="icon"
    />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg leading-6 font-semibold text-white">{item.step}</h4>
              <p className="mt-2 text-base leading-6 text-white">
                {item.text}
              </p>
            </div>
          </div>
        </li>
      
    </>
   ))
   }

      
      </ul>
    </div>
  </div>
</div>

        
        </>
    )
}