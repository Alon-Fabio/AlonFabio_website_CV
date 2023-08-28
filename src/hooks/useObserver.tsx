import { RefObject, useEffect, useState } from "react";

interface IUseObserver {
  (
    options: {
      root: null | HTMLElement;
      rootMargin: string;
      threshold: number;
    },
    elements: RefObject<HTMLFieldSetElement>[],
    className: string
  ): void;
}

export const useObserver: IUseObserver = (options, elements, className) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);

        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      });
    }, options);

    elements
      .filter((card) => !card.current?.classList.contains(className))
      .forEach((card) => {
        if (card.current) observer.observe(card.current);
      });

    return () => {
      elements.forEach((card) => {
        if (card.current) observer.unobserve(card.current);
      });
    };
  }, [isIntersecting, className, options, elements]);
};
