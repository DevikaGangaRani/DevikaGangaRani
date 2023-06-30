import React from 'react';
import CarouselReview from './Carousel';

const App: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-1/2 h-26 px-40 py-9">
        <div className="font-bold text-4xl">Review from customers</div>
        <div className="pt-4 text-xs pb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </div>
      </div>
      <CarouselReview />
    </>
  );
};

export default App;
