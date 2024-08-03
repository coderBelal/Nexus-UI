import React from "react";
import card from "./card1.svg";
import card2 from "./antv.png";
import "./Card.css";
const Card = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img className="w-full p-5 rounded-lg" src={card} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div className="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img className="w-full p-5 rounded-lg" src={card} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div className="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img className="w-full p-5 rounded-lg" src={card} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div className="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img className="w-[90px] p-5 rounded-lg" src={card2} alt=""/>
            <div className="">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div className="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img className="w-[90px] p-5 rounded-lg" src={card2} alt="" />
            <div className="">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div className="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img className="w-[90px] p-5 rounded-lg" src={card2} alt="" />
            <div className="">
              <div className="font-bold text-xl mb-2">Design values</div>
              <p className="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
