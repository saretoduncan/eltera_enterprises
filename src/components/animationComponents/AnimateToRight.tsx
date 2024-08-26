import { useInView } from "react-intersection-observer";
import { TAnimateWrapper } from "./AnimateToTop";

const AnimateToRight: React.FC<TAnimateWrapper> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-x-0 opacity-100" : "translate-x-[-2.0rem] opacity-0"
      } transition-all ease-in-out duration-700 `}
    >
      {children}
    </div>
  );
};

export default AnimateToRight;
