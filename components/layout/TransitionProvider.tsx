"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/app/loading";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (pathname !== displayChildren?.props?.childProp?.segment) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [pathname, children]);

  return (
    <>
      {isTransitioning && <Loading />}
      <div className={isTransitioning ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {displayChildren}
      </div>
    </>
  );
}