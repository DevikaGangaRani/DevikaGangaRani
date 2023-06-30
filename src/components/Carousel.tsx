import React from 'react';
import Person from '../images/person.svg';
import arrow from '../images/arrow.svg';
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div>
      <div className="flex flex-col rounded overflow-hidden shadow-lg px-12 py-9 w-116.24">
        <div className="flex flex-row">
          <img className="w-17.48 h-17.48" src={imageUrl} alt={title} />
          <div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </div>
        </div>
        <div className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </div>
      </div>
    </div>
  );
};

const Carousel: React.FC = () => {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="grid grid-cols-3 pl-[162px] ">
          <div>
            <Card
              title="Card 3"
              description="This is the third card"
              imageUrl={Person}
            />
          </div>
          <div>
            <Card
              title="Card 3"
              description="This is the third card"
              imageUrl={Person}
            />
          </div>
          <div>
            <Card
              title="Card 3"
              description="This is the third card"
              imageUrl={Person}
            />
          </div>
        </div>

        <div className="relative w-1/2 pt-10 flex justify-center z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-purple-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-gray-400"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute pr-60 top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <img src={arrow} className="w-10 h-10 rounded-full bg-purple-400" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
