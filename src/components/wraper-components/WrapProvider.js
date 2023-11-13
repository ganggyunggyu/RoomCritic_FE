import { cn } from '../../util/cn';

const WrapProvider = ({ children, type, row, className }) => {
  return (
    <div
      className={cn(
        type === 'wrap' ? 'flex flex-col w-screen h-screen justify-center items-center gap-5' : '',
        type === 'form' ? 'w-4/6 md:w-80 flex flex-col gap-3' : '',
        row ? 'flex-row' : '',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default WrapProvider;
