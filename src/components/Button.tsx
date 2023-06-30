import React, { useState } from 'react';

const Button: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className=" border border-1 h-[37px] pt-[5px] pl-[8px] w-[171px]">
      <button
        className={`relative flex  items-center justify-center  h-[27px]  ${
          isMonthly ? 'bg-white' : ''
        }`}
        onClick={handleToggle}
      >
        <button className="flex justify-around rounded-full w-[75px] border border-1 text-black cursor-pointer">
          <span
            className={`text-black ${
              isMonthly ? '' : 'bg-purple-400'
            } w-[75px] ${isMonthly ? '' : 'w-[75px]'} rounded-full `}
          >
            monthly
          </span>
        </button>
        <button className="flex justify-around rounded-full w-[75px] border border-1 text-black cursor-pointe">
          <span
            className={`text-black ${
              isMonthly ? 'bg-purple-400' : ''
            }  w-[75px]  ${isMonthly ? 'w-[75px]' : ''} rounded-full`}
          >
            yearly
          </span>
        </button>
      </button>
    </div>
  );
};

export default Button;
