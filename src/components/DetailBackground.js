const DetailBackground = ({ path }) => {
  return (
    <img
      loading="lazy"
      decoding="async"
      src={`https://www.themoviedb.org/t/p/original/${path}`}
      alt="movie-img"
      className="fixed top-0 opacity-20 z-0 blur-sm	w-full"
    />
  );
};
export default DetailBackground;
