import React from 'react';
import Card from '../Card/Card';
import ResponsiveProvider from './ResponsiveProvider';

const CardWrapProvider = ({ title, cardList, onClick }) => {
  const cardConatinerRef = React.useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    const cardContainer = cardConatinerRef.current;

    if (cardContainer) {
      if (direction === 'left') {
        cardContainer.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        cardContainer.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <ResponsiveProvider direction={'row'}>
      <div className="w-full z-10 relative">
        <div className="absolute inset-y-0 left-0 z-20 rounded-full opacity-50 flex items-center justify-center hover:opacity-80 transition-all">
          <button
            onClick={() => {
              handleScroll('left');
            }}
            className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-20 rounded-full opacity-50 flex items-center justify-center hover:opacity-80 transition-all">
          <button
            onClick={() => {
              handleScroll('right');
            }}
            className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <h1 className="md:text-3xl text-lg">{title}</h1>
        <div
          ref={cardConatinerRef}
          className="flex overflow-x-scroll overflow-y-hidden gap-5 py-5 smooth-scroll"
        >
          {cardList.map((content, i) => {
            return (
              <Card
                key={content._id}
                content={content}
                onClick={() => {
                  onClick(content);
                }}
              />
            );
          })}
        </div>
      </div>
    </ResponsiveProvider>
  );
};
export default CardWrapProvider;
