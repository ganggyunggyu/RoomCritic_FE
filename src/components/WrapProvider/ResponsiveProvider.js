import { cva } from 'class-variance-authority';
import { cn } from '../../util/cn';
export const ResponsiveProviderVariants = cva(`md:w-7/12 w-10/12 flex pt-10`, {
  variants: {
    direction: {
      col: `flex-col items-center justify-center`,
      row: `flex-row items-center justify-center`,
    },
  },
});

const ResponsiveProvider = ({ children, direction, className, ...props }) => {
  return (
    <section
      className={cn(ResponsiveProviderVariants({ direction, className }), {
        ...props,
      })}
    >
      {children}
    </section>
  );
};
export default ResponsiveProvider;
