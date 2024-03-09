"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


export default function Faq(){
    return(
        <>
        <div className="p-6 gap-1 m-2">
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="">What is included in the Video Editing Assets Bundle?</AccordionTrigger>
    <AccordionContent>
    The bundle includes a variety of transitions, overlays, effects, text animations, LUTs, and more, designed to enhance your video editing projects.
    </AccordionContent>
  </AccordionItem>


</Accordion>
</div>
        </>
    )
}