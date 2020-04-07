import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  const handleEscape = e => {
    if (ref.current && !ref.current.contains(e.target) && e.keyCode === 27) {
      console.log(e);
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  });
};

export default useOutsideClick;