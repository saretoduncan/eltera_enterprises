import { useEffect, useState } from "react";

const useNavChangeHook = () => {
  const [isNavFull, SetNavFull] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? SetNavFull(true) : SetNavFull(false);
    });
  }, []);
  return { isNavFull };
};

export default useNavChangeHook;
