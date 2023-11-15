import { cn } from '../../util/cn';

const WrapProvider = ({ children, type, row, className }) => {
  return (
    <section
      className={cn(
        type === 'wrap' && 'flex flex-col w-screen h-screen justify-center items-center gap-5',
        type === 'centering' && 'flex flex-col w-screen h-screen items-center',
        type === 'form' && 'w-4/6 md:w-80 flex flex-col gap-3',
        row ? 'flex-row' : '',
        className,
      )}
    >
      {children}
    </section>
  );
};
export default WrapProvider;
