'use client'
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/Components/ui/3d-card";
import data from "@/data/music_courses.json"
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}
function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="font-bold items-center text-lg text-center md:text-7xl bg-gradient-to-b mb-8 ">All Courses {data.courses.length}</h1>
      <div className="flex flex-wrap justify-center">
        {data.courses.map((course:Course) => (
          <CardContainer className="inter-var m-4" key = {course.id}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
          >
          {course.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={course.title}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default page