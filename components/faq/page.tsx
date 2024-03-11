"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Subtitles } from "lucide-react"
import Title from "../Title/page";
  


export default function Faq(){

  const Faqs = [
    {
      "title": "What is included in the Video Editing Assets Bundle?",
      "subtitle": "The bundle includes a variety of transitions, overlays, effects, text animations, LUTs, and more, designed to enhance your video editing projects."
    },
    {
      "title": "Do I need advanced video editing skills to use this bundle?",
      "subtitle": "No, our bundle is user-friendly and suitable for both beginners and professionals. We also provide video editing course to help you get started."
    },
    {
      "title": "Is this bundle compatible with all video editing software?",
      "subtitle": "All of our assets are compatible with almost all video editing software like After Effects, Premiere Pro, Davinci Resolve, Final Cut Pro, etc."
    },
    {
      "title": "Are there any licensing or royalty fees?",
      "subtitle": "All assets in the bundle are royalty-free for both personal and commercial use. No additional licensing fees are required."
    },
    {
      "title": "How do I access the assets after purchase?",
      "subtitle": "Upon purchase, you’ll receive a download link to access all the assets on your registered email and WhatsApp number. Make sure to back them up for future use."
    },
    {
      "title": "Can I use these assets for commercial projects?",
      "subtitle": "Yes, all assets in the bundle can be used for both personal and commercial projects without any restrictions."
    },
    {
      "title": "Are there any updates or additions to the bundle in the future?",
      "subtitle": "Yes, we periodically update the bundle with new assets. Customers will be notified of any updates."
    },
    {
      "title": "What are the payment methods do you support?",
      "subtitle": "We cover each and every payment method including wallets (Paytm, Phonepay, Gpay), Net Banking, Debit or Credit Cards, etc."
    },
    {
      "title": "How will I get the resources?",
      "subtitle": "Simply click on the 'Order Now' button, enter your email during the checkout process and you will get instant access to the resources via a Google Drive link shared in your inbox."
    },
    {
      "title": "What if I don't have storage in my device?",
      "subtitle": "We know that 1 TB of resources would be a lot, so we created a Google Drive link where you can access them 24/7."
    },
    {
      "title": "Can I use the editing resources for commercial projects?",
      "subtitle": "Absolutely! Once you purchase the pack, you have the freedom to use the resources in both personal and commercial projects. There are no additional licensing restrictions."
    }
  ];
  



    return(
        <>
        <div className="p-6 gap-1 m-2 justify-center items-center">
    <Title title="Frequently Asked Questions(FAQs)" />

<Accordion type="single" collapsible className="flex flex-col ">
{

 Faqs.map((item,i)=>(
  <AccordionItem value={`item-${i}`}>



    <AccordionTrigger className="">{item.title}</AccordionTrigger>
    <AccordionContent>
    {item.subtitle}
    </AccordionContent>
  </AccordionItem>


 ))
 }


</Accordion>
</div>
        </>
    )
}