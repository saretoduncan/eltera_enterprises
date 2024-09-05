import { useInView } from "react-intersection-observer";
import { TAnimateWrapper } from "./AnimateToTop";

const AnimateToBottom: React.FC<TAnimateWrapper> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-y-0 opacity-100" : "translate-y-[-6rem] opacity-0"
      } transition-all ease-in-out duration-700 `}
    >
      {children}
    </div>
  );
};

export default AnimateToBottom;
