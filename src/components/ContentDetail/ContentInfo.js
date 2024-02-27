const ContentInfo = ({ content }) => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-3xl'>{content.title || content.name}</p>
      <p className='leading-loose overflow-y-scroll'>{content.overview}</p>
    </div>
  );
};
export default ContentInfo;
