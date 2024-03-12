import Link from 'next/link'

export default function Download(){
    return(
        <>
        <div className="flex flex-col justify-center items-center p-3 gap-2  bg-zinc-950 w-full fixed bottom-0 z-50">
      <p className="w-full font-semibold text-center"> <span className="text-secondColor">(99% off) </span>Limited Time Offer 🔥🔥</p>
     <a href='https://cosmofeed.com/vp/65f036b689a21e00136eb155'> <button type="button" className="px-8 py-3 w-screen  rounded dark:bg-secondColor font-bold dark:text-gray-800">Download</button>
     </a>   </div>
        </>
    )
}