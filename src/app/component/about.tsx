import React from "react";
import Image from "next/image";

const About =() =>{
    return(
        <div id="about">
           <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/assits/pictures/profile-pic.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me...!
      </h1>
      <p className="mb-8 leading-relaxed">


Dynamic and detail-oriented Software Engineering professional with a strong background in Artificial Intelligence, Web Development, and Data Annotation. Equipped with a Bachelor’s degree in Computer Science from Federal Urdu University, I bring hands-on experience in managing and analyzing data, tagging and labeling for machine learning, and enhancing AI accuracy. My work in various roles, from Field Manager to Stock In-Charge, has honed my ability to lead teams, manage inventory, and optimize workflows. With proficiency in programming languages and tools like JavaScript, HTML, CSS, and specialized software, I am committed to leveraging my skills to contribute meaningfully to forward-thinking tech projects.
      </p>
      <div className="flex justify-center">
        <a href={"/assits/my-cv/my-apdated-CV.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View Cv
        </button>
        </a>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default About;