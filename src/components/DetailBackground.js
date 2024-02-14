import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const DetailBackground = ({ path }) => {
  return (
    <div className='fixed top-0 opacity-20 z-0 blur-sm w-screen h-screen'>
      <LazyLoadImage
        className='w-full h-full'
        src={`https://www.themoviedb.org/t/p/original/${path}`}
        alt={path}
        loading='lazy'
        effect='blur'
        width={'100%'}
        height={'100%'}
      />
    </div>
  );
};
export default DetailBackground;
