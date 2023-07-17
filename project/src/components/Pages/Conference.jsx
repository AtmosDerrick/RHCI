import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Copyright from "../Copyright";
import "../../style/landingStyle.css";

function Conference() {
  return (
    <div id="jesusloveyou" className="">
      <div className="w-full pt-24 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="   ">
          <div className="w-full px-2 xl:px-0 xl:w-3/4 mx-auto py-4 text-base  md:text-xl uppercase  flex items-center font-sans font-bold text-white ">
            <div>Events and Conference</div>
          </div>
        </div>
      </div>
      <div className="xl:w-3/4 px-2 xl:px-0 xl:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 mr-2">
        <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
          <div className="flex justify-between">
            <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
              20th<br></br>
              <span className="uppercase ">Sep.</span>
            </div>
            <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
              <div className="text-base font-medium pl-2 text-black">
                Mega Night of Worship
              </div>
              <div className="text-gray-900 font-semibold uppercase">
                <i class="fa-solid fa-clock"></i> |<span>6:00Pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
          <div className="flex justify-between">
            <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
              9th<br></br>
              <span className="uppercase ">Oct.</span>
            </div>
            <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
              <div className="text-base font-medium pl-2 text-black">
                Women COnference
              </div>
              <div className="text-gray-900 font-semibold uppercase">
                <i class="fa-solid fa-clock"></i> |<span>6:00Pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
          <div className="flex justify-between">
            <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
              1st<br></br>
              <span className="uppercase ">Nov.</span>
            </div>
            <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
              <div className="text-base font-medium pl-2 text-black">
                Fasting and Prayer
              </div>
              <div className="text-gray-900 font-semibold uppercase">
                <i class="fa-solid fa-clock"></i> |<span>6:00Pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
          <div className="flex justify-between">
            <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
              15th<br></br>
              <span className="uppercase ">Dec.</span>
            </div>
            <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
              <div className="text-base font-medium pl-2 text-black">
                Weija Revival
              </div>
              <div className="text-gray-900 font-semibold uppercase">
                <i class="fa-solid fa-clock"></i> |<span>6:00Pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-2 xl:w-full xl:mx-auto  gap-4 mt-4">
          <div className="flex justify-between">
            <div className="text-center bg-blue-800 font-bold uppercase text-xl p-2 text-white h-[5rem] w-[5rem]">
              26th<br></br>
              <span className="uppercase ">June</span>
            </div>
            <div className="flex justify-between w-full border-4 border-gray-900 ml-2 bg-gray-100 px-2 items-center">
              <div className="text-base font-medium pl-2 text-black">
                Love Conference
              </div>
              <div className="text-gray-900 font-semibold uppercase">
                <i class="fa-solid fa-clock"></i> |<span>9:00am</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Conference;
