import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const DetailBackground = ({ path }) => {
  return (
    <img
      className="fixed top-0 opacity-20 z-0 blur-sm w-screen"
      src={`https://www.themoviedb.org/t/p/original/${path}`}
      alt={path}
      loading="lazy"
      // effect="blur"
      // width={'100vw'}
      // height={'100vh'}
      // style={{ position: 'fixed' }}
    />
  );
};
export default DetailBackground;
