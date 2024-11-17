import React from "react";
import Link from "next/link";
import Image from "next/image";


const Project =()=>{
    return(
        <div id="project" >
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
       <div className="lg:w-2/3 mx-auto">
       <div>
          <h1 className="flex justify-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            My Projects...
          </h1>
        </div>

      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        
        <Image
          alt="gallery"
          className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
          src={require("../../../public/assits/my-projects/my-project-pakwheelsclone.PNG")}
        />
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
          pakwheels-website-clone project
          </h2>
          <p className="leading-relaxed">
          i have made pakwheels website clone project.
          </p>
          <Link href={"https://vercel.com/sardarqayums-projects/pakwheels-web-clone-gmxw"}>
          <p className="leading-relaxed text-blue-400 hover:underline ">Veiw Projects..</p>
          </Link>
        </div>
       </div>
       <div className="flex flex-wrap -mx-2">
       <div className="px-2 w-1/2"> 
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/542x460"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
                my next project i will add in this section later..
              </h2>
              {/* <p className="leading-relaxed">
                i have made pakwheels website clone project
              </p> */}
              <a className="mt-3 text-indigo-500 inline-flex items-center">
              Veiw Projects..
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div> 
        <div className="px-2 w-1/2">
           <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://dummyimage.com/542x420"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-gray-900 font-medium title-font mb-2">
              my next project i will add in this section later..
              </h2>
              {/* <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p> */}
              <a className="mt-3 text-indigo-500 inline-flex items-center">
              Veiw Projects..
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div> 
         </div>
        </div>
       </div> 
    </div>
  </div>
</section>
</div>
      
    )
}

export default Project