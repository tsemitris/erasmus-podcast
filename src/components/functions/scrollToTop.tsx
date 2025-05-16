import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo(0, 0);
    }
  }, [location, navigation.state]);

  return null;
};

export default ScrollToTop;
