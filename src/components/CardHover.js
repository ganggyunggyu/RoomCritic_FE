const CardHover = ({ review }) => {
  return (
    <div className={`absolute z-10 w-full h-full flex items-center justify-center`}>
      <div className="absolute w-full h-full bg-black opacity-40"></div>
      <p className="text-white z-20">{review && review}</p>
    </div>
  );
};
export default CardHover;
