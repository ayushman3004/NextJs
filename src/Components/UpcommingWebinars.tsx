'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'
function UpcommingWebinars() {
  return (
    <div className="py-12 bg-gray-900 mx-auto">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Music Journey</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
             <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={musicFeatures} />
    </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/"} className="px-4 py-2 rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View All webinars
            </Link>
        </div>
    </div>
  )
}
 const musicFeatures = [
  {
    title: "Discover Music",
    description:
      "Explore trending tracks, curated playlists, and hidden gems from artists worldwide.",
    link: "/discover",
  },
  {
    title: "Create Playlists",
    description:
      "Build and customize your own playlists to suit every mood and moment.",
    link: "/playlists",
  },
  {
    title: "AI Recommendations",
    description:
      "Get personalized music suggestions powered by AI based on your listening history.",
    link: "/recommendations",
  },
  {
    title: "Offline Mode",
    description:
      "Download your favorite songs and listen anytime without the internet.",
    link: "/offline",
  },
  {
    title: "Live Radio",
    description:
      "Tune into live radio stations across different genres and regions.",
    link: "/radio",
  },
  {
    title: "Social Sharing",
    description:
      "Share your playlists and favorite songs with friends instantly.",
    link: "/share",
  },
];

export default UpcommingWebinars