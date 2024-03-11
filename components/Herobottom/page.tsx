export default function HeroBottom(){
    return(
        <>
        <section className="dark:bg-secondColor dark:text-gray-900">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leadi sm:text-5xl">Act Now Before The Price Goes Up!
		
		</h1>
		<p className="px-8 mt-8 mb-4 text-lg">All products worth <span className="line-through">₹47,949</span>  now just at ₹399  </p>
		<p className="px-2 text-xs">Limited Time Offer ,HURRY!!</p>

        
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-900 dark:text-secondColor">Download </button>
		</div>
	</div>
</section>
        </>
    )
}