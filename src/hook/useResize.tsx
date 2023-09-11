import { useState, useEffect } from "react";

export const useResize = () => {
  const SCREEN_SM = 501;
  const SCREEN_MD = 786;
  const SCREEN_LG = 992;
  const SCREEN_XL = 1145;
  const SCREEN_XLL = 1300;
  const SCREEN_Hero = 1065;
  const SCREEN_XXXL = 1230;

  const [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXll: width >= SCREEN_XLL,
    isScreenHero: width >= SCREEN_Hero,
    isScreenXxxl: width >= SCREEN_XXXL,
  };
};
