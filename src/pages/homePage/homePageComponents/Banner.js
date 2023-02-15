import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import SearchComponent from "./SearchComponent";

const Banner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <section id="banner" className="bg-[#90e0ef] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 container mx-auto px-5">
        {/*.......Banner info data start........*/}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-7 md:mb-5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text- mb-3">
            Find Your Dream Job 
            </h1>
            {/* .....typing animation...... */}
            <TypeAnimation
              sequence={["at Relevel!", 1000, ""]}
              speed={75} // Must be in range between 1 and 99!
              wrapper="h2"
              repeat={Infinity}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#9a031e] mb-3 md:mb-5 lg:mb-8"
            />
            <p className="font-bold text-black text-base md:text-xl">
              Search Over 1000+ New Jobs Today!
            </p>
          </div>
          <div>
            <SearchComponent />
          </div>
          <div className="flex flex-wrap justify-start gap-2 mt-5">
            <p className="text-sm md:text-xl font-bold">
              Trending Jobs Keywords:
            </p>
            <p className="bg-success p-1 text-black cursor-pointer rounded-lg text-sm ">
              Web Developer
            </p>
            <p className="bg-success p-1 text-black cursor-pointer rounded-lg text-sm ">
              Android developer
            </p>
            <p className="bg-success p-1 text-black cursor-pointer rounded-lg text-sm ">
              Cloud Architect
            </p>
            <p className="bg-success p-1 text-black cursor-pointer rounded-lg text-sm ">
              IOS Developer
            </p>
          </div>
        </div>
        {/*......Banner info data end.......*/}

        {/*......Banner image start........*/}
        <figure className="col-span-2 md:col-span-1 w-full">
          {/* <img
            src="https://templates.envytheme.com/jubi/default/assets/images/faq-img.png"
            alt="banner"
            className="shrink-0"
          /> */}
        </figure>
        {/*.......Banner image end........*/}
      </div>
    </section>
  );
};

export default Banner;
