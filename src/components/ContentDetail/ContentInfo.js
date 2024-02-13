import CardImage from '../Card/CardImage';
import ResponsiveProvider from '../WrapProvider/ResponsiveProvider';

const ContentInfo = ({ content }) => {
  return (
    <ResponsiveProvider className='gap-5 h-48 z-10 p-0 mt-10 flex'>
      {/* <CardImage path={content.poster_path} /> */}
      <div className='flex flex-col gap-3'>
        <p className='text-3xl'>{content.title || content.name}</p>
        <p className='leading-loose overflow-y-scroll'>{content.overview}</p>
      </div>
    </ResponsiveProvider>
  );
};
export default ContentInfo;
