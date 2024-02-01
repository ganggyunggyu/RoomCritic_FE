import React from 'react';
// const Card = React.lazy(() => import('../Card'));
import Card from '../Card';

const CardWrapProvider = ({ title, cardList, onClick }) => {
  return (
    <div className="w-7/12">
      <h1 className="text-3xl mb-2">{title}</h1>

      <div className="flex overflow-x-scroll gap-5 py-5">
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
