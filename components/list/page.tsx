"use client"

export default function List(){

const Benefits = [
    "Dynamic, Cinematic Transitions That Captivate Viewers",
    "Enhanced Footage With Professional-Grade Overlays And Effects",
    "A Comprehensive Toolkit Expanding Creative Possibilities",
    "Quick And Efficient Editing With Drag-And-Drop Assets",
    "Animated And Stylized Text Effects That Engage The Audience",
    "Cohesive, Polished Videos With Unified Assets",
    "Peace Of Mind With 100% Royalty-Free Assets",
    "Diverse And Fresh Video Edits With A Variety Of Assets",
    "Cinematic Color Palettes And LUTs Elevating Video Aesthetics",
    "Increased Viewer Retention And Engagement With Compelling Edits",
]

const Loss = [
"Generic Transitions",
"Plain Video Clips",
"Limited Editing Tools",
"Time-Consuming Manual Edits",
"Static Text Overlays",
"Inconsistent Video Quality",
"Struggling With Licensing Issues",
"Repetitive Video Styles",
"Basic Color Grading",
"Limited Audience Engagement"
    
]


    return(
        <>
        <div className="p-3 flex justify-center items-center"></div>
        <div className="p-5 flex flex-wrap justify-center items-start m-3">



  	<div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-red-300 dark:text-gray-900">
					<div className="space-y-2">
					
						<span className="text-6xl font-bold">Before
							<span className="text-sm tracki">This</span>
						</span>
					</div>
					<p className="leading font-bold">You know Your Videos are boring and not getting Viral</p>
					<ul className="flex-1 space-y-2">
                      {  Loss.map((item,i)=>(

<>
<li className="flex items-center space-x-2">
<svg className="flex-shrink-0 w-6 h-6"  viewBox="0 0 72 72">
<path d="M36,12c13.255,0,24,10.745,24,24c0,13.255-10.745,24-24,24S12,49.255,12,36C12,22.745,22.745,12,36,12z M40.243,44.485	c1.171,1.171,3.071,1.172,4.243,0c1.172-1.172,1.171-3.071,0-4.243C44.253,40.01,42.063,37.82,40.243,36	c1.82-1.82,4.01-4.01,4.243-4.243c1.171-1.171,1.172-3.071,0-4.243c-1.171-1.171-3.071-1.171-4.243,0	C40.01,27.747,37.82,29.937,36,31.757c-1.82-1.82-4.01-4.01-4.243-4.243c-1.171-1.171-3.071-1.172-4.243,0	c-1.172,1.172-1.171,3.071,0,4.243c0.232,0.232,2.423,2.423,4.243,4.243c-1.82,1.82-4.01,4.01-4.243,4.243	c-1.171,1.171-1.171,3.071,0,4.243c1.172,1.172,3.071,1.171,4.243,0c0.232-0.232,2.423-2.423,4.243-4.243	C37.82,42.063,40.01,44.253,40.243,44.485z"></path>
</svg>				
							<span>{item}</span>
						</li></>
                        ))}
					
				
					</ul>
					<a  className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-gray-900 dark:text-red-100">I Don't Want This</a>
				</div>
			</div>
            
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
				<div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-secondColor dark:text-gray-900">
					<div className="space-y-2">
					
						<span className="text-6xl font-bold">After
							<span className="text-sm tracki">This</span>
						</span>
					</div>
					<p className="leading font-bold">Unlock the Unfair Advantage in Your Videos!</p>
					<ul className="flex-1 space-y-2">
                      {  Benefits.map((item,i)=>(

<>
<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>{item}</span>
						</li></>
                        ))}
					
				
					</ul>
					<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded dark:bg-gray-900 dark:text-secondColor">Download Now</a>
				</div>
			</div>
            
                  
            
            
            </div>
        </>
    )
}