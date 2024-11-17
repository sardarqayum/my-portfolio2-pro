"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
const Hero =() =>{
    return(
        <div id="hero">
       <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter options={{strings: ['Web Developer','UI/UX Designer','Generative AI Developer'],
         autoStart: true,
         loop: true,
  }}
  />
      </h1>
      <div className="w-[100px] h-[2px] bg-blue-500"></div>
      <p className="mb-8 leading-relaxed ">
      Dedicated Software Engineering professional with a strong foundation in Artificial Intelligence, Web 3.0, and data annotation. Holds a Bachelor’s degree in Computer Science and possesses hands-on experience in inventory management, data validation, and AI data labeling. Skilled in JavaScript, HTML, CSS, and other tools, I am committed to leveraging my technical abilities to support innovative projects and drive organizational growth.


      </p>
      
      <div className="flex justify-center">
       <Link href={"#hero"}>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg ">
          View More..
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require("../../../public/assits/pictures/profile-pic.jpg")}
        width={300}
    
      />
    </div>
  </div>
</section>

        </div>
    )
}

export default Hero