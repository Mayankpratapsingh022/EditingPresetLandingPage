import Image from 'next/image'

export default function Footer(){
    return(
        <>
        <div className="p-6 py-12 pb-10 mb-5  dark:text-white">
	<div className="container mx-auto">

		<div className="flex flex-col pb-10 lg:flex-col items-center justify-between">
        <Image
      src="/mail.svg"
      width={50}
      height={50}
      alt="Picture of the author"
    />
   
			<h2 className="text-center my-5 flex flex-row gap-1 text-2xl tracki font-semibold">

            <Image
      src="/mailo.svg"
      width={25}
      height={25}
      alt="Picture of the author"
    />    storyvibe33@gmail.com
				{/* <br className="sm:hidden">50% Off</br> */}
			</h2>
			<div className="space-x-2 text-center  text-[8px] py-2 lg:py-0">
            This Site is not a part the Facebook Website or A Meta Program, Inc. Additionally this is not endorse by Facebook or Instagram in any way. Facebook or Instragram are trademark of Meta Platform Inc.
			</div>
            <span className="font-bold text-sm">Copyright © 2024. All Right Reserved</span>
			
		</div>
	</div>
</div>
        </>
    )
}