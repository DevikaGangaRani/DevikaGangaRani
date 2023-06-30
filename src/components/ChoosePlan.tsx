import React, { FC } from 'react';
import podcastBg from '../images/podcastBg.svg';
import Button from '../components/Button';
const About: FC = () => {
  return (
    <>
      <img src={podcastBg} className="absolute bg-cover bg-center pt-[152px]" />
      <div className="w- 113.72 flex flex-col gap-6 justify-center">
        <div className="flex flex-col items-center md:flex-row justify-around">
          <div className="flex flex-col md:w-1/3 mt-10 ">
            <h1 className="w-145 text-4xl font-bold text-black text-center md:text-5xl md:text-center pt-[186px]">
              Choose your plan
            </h1>
            <p className="w-108.2 text-center text-black md:text-center pt-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="relative flex justify-center top-[24px]">
              <Button />
            </div>
            {/* <div className="flex justify-center md:justify-start  py-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-black font-bold py-5 px-4 rounded-md w-56 h-20 absolute top-390.14 left-175">
                Sign up Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="relative flex flex-row pt-[62px] pl-40  ">
          <div>
            <div className="flex flex-col gap-6 px-7 py-9 border border-purple-700 bg-white border-1 w-3/4 rounded-lg">
              <div>
                <p className="font-bold text-lg ">Basic Plan</p>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="flex flex-row gap-3 text-center">
                <p className="text-3xl text-purple-700 font-bold">$ 54 </p>
                <p className="text-purple-700 pt-1">/month</p>
              </div>
              <ul className="list-disc list-inside gap-2 border border-white">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <div className="w-1/2 h-11 border border-purple-700 border-1 rounded text-center px-3 py-3 text-xs text-purple-700">
                Start Free Trial
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="flex flex-col gap-6 px-7 py-9 border border-purple-700 bg-purple-800 border-1 w-3/4 rounded-lg">
              <div>
                <p className="font-bold text-lg  ">Basic Plan</p>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="flex flex-row gap-3 text-center">
                <p className="text-3xl text-white-700 font-bold">$ 54 </p>
                <p className="text-white-700 pt-1">/month</p>
              </div>
              <ul className="list-disc list-inside gap-2 border border-purple-700">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <div className="w-1/2 h-11 border border-purple-700 bg-white border-1 rounded text-center px-3 py-3 text-xs text-purple-700">
                Start Free Trial
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 px-7 py-9 border border-purple-700 bg-white border-1 w-3/4 rounded-lg">
              <div>
                <p className="font-bold text-lg ">Basic Plan</p>
                <p className="text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
              <div className="flex flex-row gap-3 text-center">
                <p className="text-3xl text-purple-700 font-bold">$ 54 </p>
                <p className="text-purple-700 pt-1">/month</p>
              </div>
              <ul className="list-disc list-inside gap-2 border border-white">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
              <div className="w-1/2 h-11 border border-purple-700 border-1 rounded text-center px-3 py-3 text-xs text-purple-700">
                Start Free Trial
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
