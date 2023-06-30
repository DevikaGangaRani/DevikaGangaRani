import React, { FC } from 'react';
import { ReactComponent as Logo } from '../images/background1.svg';
import Smiling from '../images/smiling.svg';
import Business from '../images/Business.svg';
import GroupDots from '../images/groupDots.svg';
import Mic from '../images/mic.svg';
import SolarPodCast from '../images/solarPodCast.svg';
import Podcast from '../images/podcast.svg';
import CardWithContent from './CardWithContent';
const Header: FC = () => {
  return (
    <>
      <div>
        <div className="flex-row justify-between">
          <Logo className="absolute bg-cover bg-center" />
          <div className="relative">
            <div className="relative container ml-24">
              <div className="flex items-center justify-between pt-9 pr-24">
                <a
                  href="#"
                  className="hidden font-bold text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
                >
                  logo
                </a>
                <div className="hidden w-91.72 space-x-20 md:flex">
                  <a
                    href="#"
                    className="hover:text-darkGrayishBlue font-bold text-white"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="hover:text-darkGrayishBlue font-bold text-white"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="hover:text-darkGrayishBlue font-bold text-white"
                  >
                    Review
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row justify-around">
                <div className="flex flex-col md:w-1/2 mt-13">
                  <h1 className="w-145 text-4xl font-bold text-white text-center md:text-5xl md:text-left">
                    Learn how to launch a successful podcast
                  </h1>
                  <p className="w-108.2 text-center text-white md:text-left pt-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting in ustry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <div className="flex justify-center md:justify-start py-20">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-5 px-4 rounded-md w-56 h-20 absolute top-390.14 left-175">
                      Sign up Now
                    </button>
                  </div>
                </div>
                <div>
                  <div className="relative mt-36">
                    <img
                      src={GroupDots}
                      alt="Image 3"
                      className="w-122.72 h-70.24 relative left-20 pl-25 mr-28  pt-10"
                    />

                    <img
                      src={SolarPodCast}
                      alt="Image 4"
                      className="h-15 absolute top-20 pt-20 right-0"
                    />
                    <img
                      src={Mic}
                      alt="Image 2"
                      className="bg-white w-15 h-15 absolute transform rotate-15.135 right-12 bottom-5"
                    />
                    <img
                      src={Smiling}
                      alt="Image 1"
                      className="w-122.72 h-70.24 absolute top-0 bottom-10 pb-8 left-20"
                    />
                    <img
                      src={Business}
                      alt="Image 2"
                      className="w-122.72 h-70.24 absolute bottom-10 pb-3 left-8 right-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex  justify-end">
              <img
                src={Podcast}
                alt="Podcast Logo"
                className="relative flex justify-end bottom-20 left-5 pt-5"
              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col justify-around ">
                <div className="relative left-[195px] bottom-[150px]">
                  <CardWithContent
                    title="Interactive Features"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                  />
                </div>
                <div className="relative top-[54px] left-[195px]">
                  <CardWithContent
                    title="Interactive Features"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                  />
                </div>
                <div className="relative  bottom-[127px] left-[495px]">
                  <CardWithContent
                    title="Interactive Features"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                  />
                </div>

                <div className="relative top-[77px] left-[495px]">
                  <CardWithContent
                    title="Interactive Features"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
                  />
                </div>

                <div className="absolute w-1/4 left-[847.5px] bottom-[50.5px]">
                  <div className="text-4xl font-bold  ">About the Course</div>
                  <div className="pt-[24px] text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unkno
                  </div>
                  <div className="pt-[48px] cursor-pointer">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-md w-[237px] h-[60px] absolute ">
                      Sign up Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
