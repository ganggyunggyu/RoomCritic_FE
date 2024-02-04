const CardHover = ({ review }) => {
  return (
    <div className={`absolute z-10 w-full h-full flex items-center justify-center `}>
      <div className="absolute w-full h-full bg-black opacity-40 rounded-md"></div>
      <p className="text-white z-20 p-3 text-center leading-loose">{review && review}</p>
    </div>
  );
};
export default CardHover;
