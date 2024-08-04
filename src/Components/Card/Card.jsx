import React from "react";
import card from "./card1.svg";
import card2 from "./antv.png";
import Card3 from "../../assets/2.svg"
import Card4 from "../../assets/card3.svg"
import logo from "../../assets/logo.svg"
import logo1 from "../../assets/logo1.svg"
import "./Card.css";
const Card = () => {
  return (
    <>
 <div className="container mx-auto px-4">
  <h1 className="font-bold text-4xl text-center mb-4">Design and framework</h1>
  <p className="text-center mb-4">
    Supporting ecology, allowing you to quickly build website applications
  </p>
  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <div className="h-[300px] rounded-lg shadow-lg bg-white mx-auto">
      <img className="w-full p-5 rounded-lg" src={card} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Design values</div>
        <p className="text-gray-400">
          Certainty, Meaningfulness, Growth, Naturalness
        </p>
      </div>
    </div>
    <div className="h-[300px] rounded-lg shadow-lg bg-white mx-auto">
      <img className="w-full p-5 rounded-lg" src={Card4} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Design Guide</div>
        <p className="text-gray-400">
          Global Style And Design Pattern
        </p>
      </div>
    </div>
    <div className="h-[300px] rounded-lg shadow-lg bg-white mx-auto">
      <img className="w-full p-5 rounded-lg" src={Card3} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Components Libraries</div>
        <p className="text-gray-400">
          Nexus UI Of React
        </p>
      </div>
    </div>
    <div className="h-[300px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA] mx-auto">
      <img className="w-[150px] p-5 rounded-lg" src={card2} alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">   NexusV</div>
        <p className="text-gray-400">
New Generation of data visualization solutions
        </p>
      </div>
    </div>
    <div className="h-[300px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA] mx-auto">
      <img className="w-[150px] p-5 rounded-lg" src={logo1} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Kitchen</div>
        <p className="text-gray-400">
      Sketch Tool set for designer VSCode ,Figma, Adobe
        </p>
      </div>
    </div>
    <div className="h-[300px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA] mx-auto">
      <img className="w-[150px] p-5 rounded-lg" src={logo} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mobile UI Components Library Global </div>
        <p className="text-gray-400">
  Mobile Design Nexus
        </p>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Card;
