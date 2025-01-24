import { useEffect } from "react";
import { useLocation } from "react-router"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if(window.location.href.match("#") != null){
        console.log("Route change detected")
        return
    }
     // Only scroll to top on home page
    window.scrollTo(0, 0); // Scroll to top
  }, [pathname]); // Trigger on route change

  return null;
};

export default ScrollToTop;
