"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Now I can Edit videos with confidence",
    name: "Ravi",
    title: "Content Creator",
  },
  {
    quote:
      "Absolutely game-changing! This video editing bundle has transformed my editing process, making it more efficient and enjoyable. A must-have for anyone serious about creating professional-quality videos.",
    name: "Arman",
    title: "Video Editor",
  },
  {
    quote: "Ridiculous if you don't use these presets, If you're not using this bundle, you're missing out. It's definitely worth buying",
    name: "Md Aziz",
    title: "Youtuber",
  },
  {
    quote:
      "Super impressed with the pack! A must-buy for anyone serious about video editing, its so cheap!",
    name: "Nick Kendall",
    title: "Freelance Editor",
  },
  {
    quote:
      "This pack has been a game-changer! My editing time has significantly reduced, and the quality of my videos has increased. I highly recommend it!",
    name: "Kushi J",
    title: "Instagram Creator",
  },
];
