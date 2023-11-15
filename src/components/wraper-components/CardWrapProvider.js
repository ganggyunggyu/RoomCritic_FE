import React from 'react';
import Card from '../Card';

const CardWrapProvider = ({ title, cardList, onClick }) => {
  return (
    <div className="w-11/12">
      <h1 className="text-xl p-2">{title}</h1>
      <div className="flex overflow-x-scroll gap-3 p-3">
        {cardList.map((content, i) => {
          return (
            <Card
              key={i}
              content={content}
              onClick={() => {
                onClick(content);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CardWrapProvider;
