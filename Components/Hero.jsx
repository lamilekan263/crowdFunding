import Image from "next/image";
import React, { useState } from "react";
import ICON from "./ICON";
import Arrow from "./Arrow";

const Hero = ({ title, createCamapaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    deadline: "",
    amount: ""
  });
  const createNewCamapaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCamapaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        alt="testing"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <ICON />

        <div className="relative px-4 py-14 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xlpr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">Crypto King
                <br className="hidden md:block" />
                Crowd Funding CK
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, amet dolore inventore fuga deleniti totam optio debitis praesentium numquam itaque. Laudantium mollitia ex, illo fugiat saepe quibusdam provident consequuntur iure.
                Delectus odio quaerat nobis soluta dicta molestias iusto a dolorum cum reprehenderit accusantium doloribus, alias non tenetur expedita esse, aliquam assumenda itaque natus quasi omnis quia suscipit, ipsa cupiditate. Earum.
              </p>
              <a href=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >Learn More <Arrow />
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Campaign
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input onChange={ (e) => setCampaign({
                      ...campaign,
                      title: e.target.value
                    }) }
                      required
                      placeholder="title"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>

                  {/* last name */ }
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Description
                    </label>
                    <input onChange={ (e) => setCampaign({
                      ...campaign,
                      description: e.target.value
                    }) }
                      required
                      placeholder="Description"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  {/*  */ }
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Target Amount
                    </label>
                    <input onChange={ (e) => setCampaign({
                      ...campaign,
                      amount: e.target.value
                    }) }
                      required
                      placeholder="Amount"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="amoung"
                      name="amoung"
                    />
                  </div>
                  {/* date */ }
                  <div className="mb-1 sm:mb-2">
                    <label htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input onChange={ (e) => setCampaign({
                      ...campaign,
                      deadline: e.target.value
                    }) }
                      required
                      placeholder="Date"
                      type="date"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <button onClick={ e => createCamapaign(e) }
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none newColor"
                    >
                      Create Campaign
                   </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Create Your Campaing for raise funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
