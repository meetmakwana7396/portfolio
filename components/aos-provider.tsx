"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return  children;
};

export default AosProvider;
