import { useEffect } from "react";
import { useLocation } from "react-router"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Trigger on route change

  return null;
};

export default ScrollToTop;
