"use client"; 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";
import { cn } from "@/utils/utils";
 
function CardMoving() {
  return (
<div className={cn(
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] mx-auto w-full h-[40rem] flex flex-col justify-center items-center text-center",
        )}
 >
      <h2 className="text-5xl font-bold text-center mb-8 z-10 ">Hear our Harmony</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col justify-center items-center text-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  )
}
const testimonials = [
  {
    quote:
      "The guitar lessons completely changed my perspective on music. Within weeks, I was confidently playing songs I never thought possible.",
    name: "Arjun Mehta",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "Joining the vocal coaching program boosted my confidence. I can now hit higher notes with ease and perform in front of audiences.",
    name: "Sarah Thomas",
    title: "Vocal Training Student",
  },
  {
    quote:
      "The piano classes were structured and inspiring. I loved learning classical pieces, and my teacher encouraged me every step of the way.",
    name: "Rahul Sen",
    title: "Classical Piano Student",
  },
  {
    quote:
      "Music theory was something I always struggled with, but the academy made it simple. Now I can compose my own songs effortlessly.",
    name: "Emily Carter",
    title: "Songwriting & Theory Student",
  },
  {
    quote:
      "The digital music production course helped me create professional tracks. I even released my first single thanks to the skills I learned here.",
    name: "Karan Singh",
    title: "Music Production Student",
  },
];

export default CardMoving