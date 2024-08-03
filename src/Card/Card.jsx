import React from "react";
import card from "./card1.svg";
import card2 from "./antv.png";
import "./Card.css";
const Card = () => {
  return (
    <>
      <div class="container mx-auto">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div class="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img class="w-full p-5 rounded-lg" src={card} alt="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div class="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img class="w-full p-5 rounded-lg" src={card} alt="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div class="max-w-sm h-[300px] rounded-lg shadow-lg bg-white">
            <img class="w-full p-5 rounded-lg" src={card} alt="" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div class="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img class="w-[90px] p-5 rounded-lg" src={card2} alt=""/>
            <div class="">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div class="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img class="w-[90px] p-5 rounded-lg" src={card2} alt="" />
            <div class="">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
                My name is Abdullah Al Nirob, web developer
              </p>
            </div>
          </div>
          <div class="px-5 max-w-sm h-[200px] border-2 border-gray-200 rounded-lg shadow-lg bg-[#F0F3FA]">
            <img class="w-[90px] p-5 rounded-lg" src={card2} alt="" />
            <div class="">
              <div class="font-bold text-xl mb-2">Design values</div>
              <p class="text-gray-700">
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
