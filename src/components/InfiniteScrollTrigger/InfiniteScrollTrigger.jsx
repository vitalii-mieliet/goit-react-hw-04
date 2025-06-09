import { useEffect, useRef } from "react";

const InfiniteScrollTrigger = ({ onIntersect, isLoading, hasMore }) => {
  const loaderRef = useRef();

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        rootMargin: "50% 0px",
      }
    );

    const loader = loaderRef.current;
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [onIntersect, hasMore, isLoading]);

  return <div ref={loaderRef} style={{ height: "1px" }} />;
};

export default InfiniteScrollTrigger;
