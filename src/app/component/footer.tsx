import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer =() =>{
    return(
        <div className="bg-blue-50">
            <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <Image
       src={require("../../../public/assits/pictures/s.png")}
       alt="logo"
       width={50}
       height={100}
       className=""/>

      <span className="ml-3 text-xl">sardarqayum</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 my-portfolio —
      {/* <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @my-portfolio
      </a> */}
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
      
      <Link target="_blank" className="ml-2 text-2xl hover:bg-yellow-700"
      href={"https://www.linkedin.com/in/sardar-qayum-25ab95151/"}>
        <FaFacebook />
       
      </Link>
        
      <Link target="_blank" className="ml-2 text-2xl hover:bg-orange-700"
      href={"https://www.linkedin.com/in/sardar-qayum-25ab95151/"}>
       
        <FaLinkedin />
      </Link>  
      
    </span>
  </div>
</footer>

        </div>
    )
}

export default Footer