import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  // as we want to load once after the render that's why we use useEffect
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline, []);
    window.addEventListener("offline", handleOffline, []);

    // when we go to another page need to cleanup the eventlisteners else it will continue running in the background
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  });

  return isOnline; //return s true or false
};

export default useOnline;
