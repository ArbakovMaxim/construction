import { useState, useEffect } from "react";

export const useResize = () => {
  const SCREEN_SM = 501;
  const SCREEN_MD = 786;
  const SCREEN_LG = 992;
  const SCREEN_tabl_mini = 620;
  const SCREEN_tabl = 868;
  const SCREEN_Hero = 1065;
  const SCREEN_XXXL = 1230;

  const [width, setWidth] = useState(window.innerWidth);

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
    isScreenTableMini: width >= SCREEN_tabl_mini,
    isScreenTable: width >= SCREEN_tabl,
    isScreenHero: width >= SCREEN_Hero,
    isScreenXxxl: width >= SCREEN_XXXL,
  };
};
