import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const CardWithContent: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="absolute bottom-0 gap-[16px] w-[268px] h-[160px] rounded overflow-hidden shadow-lg border border-purple-300 rounded ">
      <div className="px-[30px] py-[30px]">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray text-xs text-base pt-[16px]">{description}</p>
      </div>
    </div>
  );
};

export default CardWithContent;
