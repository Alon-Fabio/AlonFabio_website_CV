import { MutableRefObject, useEffect } from "react";

interface IUseObserver {
  (
    options: {
      root: null | HTMLElement;
      rootMargin: string;
      threshold: number;
    },
    elements:
      | MutableRefObject<HTMLElement | null>
      | Array<MutableRefObject<HTMLElement | null>>,
    className: string | IntersectionObserverCallback,
    Unobserve?: boolean
  ): void;
}

export const useObserver: IUseObserver = (
  options,
  elements,
  intersectionObserverCallback,
  Unobserve = false
) => {
  useEffect(() => {
    const refElement = elements;
    let observer: IntersectionObserver;
    if (typeof intersectionObserverCallback === "function") {
      observer = new IntersectionObserver(
        intersectionObserverCallback,
        options
      );
    } else {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(intersectionObserverCallback);
            Unobserve && observer.unobserve(entry.target);
            console.log("trigger");
          }
        });
      }, options);
    }
    if (!Array.isArray(refElement)) {
      refElement.current && observer.observe(refElement.current);
    } else {
      refElement.forEach((card) => {
        card.current && observer.observe(card.current);
      });
    }

    return () => {
      if (!Array.isArray(refElement))
        refElement.current && observer.unobserve(refElement.current);

      if (Array.isArray(refElement))
        refElement.forEach((card) => {
          card.current && observer.unobserve(card.current);
        });
    };
  }, [options, elements, intersectionObserverCallback, Unobserve]);
};
