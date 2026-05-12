"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

export default function TransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentChildren, setCurrentChildren] = useState(children);
  const [savedPathname, setSavedPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== savedPathname) {
      setIsTransitioning(true);
      setSavedPathname(pathname);

      const timer = setTimeout(() => {
        setCurrentChildren(children);
        setIsTransitioning(false);
      }, 1000); 

      return () => clearTimeout(timer);
    } else {
      setCurrentChildren(children);
    }
  }, [pathname, children, savedPathname]);

  return (
    <>
      {isTransitioning && <Loading />}
      <div 
        className={`transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentChildren}
      </div>
    </>
  );
}