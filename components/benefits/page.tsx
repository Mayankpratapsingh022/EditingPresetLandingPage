import { cn } from "@/lib/utils"
import React from "react";
import { BentoGrid,BentoGridItem } from "@/components/ui/bento-grid"; 
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Card from "../lottieplayer/page";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl  mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
       
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({src,loop,speed,css,size}:any) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">

<Card  src={src} css={css} size={size} loop={loop} speed={speed} />


  </div>
);
const items = [
  {
    title: "71%",
    description: "Average watch time",
    header: <Skeleton src="chart" css="bg-gradient-to-r from-secondColor  to-green-300 w-full h-full" size="w-full h-full"  loop={true} speed={0.5} />,
   
  },
  {
    title: "34%",
    description: "More views",
    header: <Skeleton   src="eye" css="bg-gradient-to-r from-secondColor  to-green-300 w-full h-full" size="w-full h-full" loop={true} speed={0.5}/>,
  },
  {
    title: "53%",
    description: "Editing time reduced, quality improved!",
    header: <Skeleton   src="timer" css="bg-gradient-to-r from-secondColor  to-green-300 w-full h-full p-6" size="w-full"  loop={true} speed={0.5}/>,
  },
  
];
