import React, { FC } from 'react';
import FooterBg from '../images/footerBg.svg';
import Insta from '../images/insta.svg';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/twitter.svg';
import Youtube from '../images/youtube.svg';

const Header: FC = () => {
  return (
    <>
      <div>
        <div className="">
          <img
            alt="footer_bg"
            src={FooterBg}
            className="w-[1439px] h-auto absolute bg-cover bg-center"
          />
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex flex-col md:w-1/2 mt-16 items-center mb-[120px]">
              <h1 className="w-145 text-lg font-bold text-black text-center md:text-3xl">
                We have what you are looking for
              </h1>
              <p className="w-108.2 text-center text-xs text-blue-500 md:text-center pt-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type a
              </p>
              <div className="pt-16 border-b-1 border-white ">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-md w-56 h-15 ">
                  <div className="p-4"> Sign up Now </div>
                </button>
              </div>
            </div>
            <div className="w-3/4 relative pt-[25px] pb-[10px] bottom-0 flex flex-row  justify-around items-center border-t border-white  border-opacity-50">
              <div className="text-white text-xs text-center ">
                All Right Reserved @Copyright 2023
              </div>
              <div className="w-1/2 flex justify-around text-center pl-[192px] text-xs ">
                <p className="text-white text">Terms of Service</p>
                <p className="text-white text">Privacy Policy</p>
                <p className="text-white text">Product</p>
              </div>
              <div className="flex w-1/4 pl-[64px] justify-around">
                <button>
                  <img src={Facebook} />
                </button>
                <button>
                  <img src={Youtube} />
                </button>
                <button>
                  <img src={Insta} />
                </button>
                <button>
                  <img src={Twitter} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
