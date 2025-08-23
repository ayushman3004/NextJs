"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Beginner Guitar Lessons",
    description: "Learn guitar basics with easy chords, strumming patterns, finger exercises, and simple songs for confident beginner-level playing.",
  },
  {
    title: "Classical Piano Training",
    description: "Master piano techniques, scales, arpeggios, classical compositions, and sight-reading while building strong performance confidence and discipline.",
   
  },
  {
    title: "Vocal Coaching",
    description: "Improve singing with breath control, vocal warm-ups, pitch accuracy, tone improvement, range expansion, and performance confidence training.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    title: "Drum & Rhythm Classes",
    description: "Develop drumming techniques, rhythm patterns, tempo control, percussion styles, hand coordination, and ensemble performance confidence for drummers.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  },
  {
    title: "Music Theory & Ear Training",
    description: "Learn scales, harmony, chords, intervals, notations, and ear training exercises to strengthen overall musical knowledge and listening abilities.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
  },
  
];

 function WhyChooseUs() {
  return (
    <div className="w-full py-4 flex flex-col justify-center text-center">
      <StickyScroll content={content} />
    </div>
  );
}
export default WhyChooseUs