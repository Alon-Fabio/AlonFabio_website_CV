// Intersection Observer Hook:
// ---------------------------
// This hook uses the intersectionObserver API for two main functions:
// 1. It can add a class to an element or elements on scroll into view.
// 2. Add your own functionality by adding your callback function.

// Intersection Observer API documentation -> "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"

// Arguments:
// options: an Object, the Intersection Observer settings (see link for more info).
// elements: an Element or Array of Elements, to be observed.
// intersectionObserverCallback: a String (CSS ClassName) or Callback function, for default (add this class when intersecting) add a String, or for more custom use add a Callback-function.
// unobserve: a Boolean, only in effect with the ClassName option, remove an element after it has been observed.

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
      | Array<MutableRefObject<HTMLElement | null>>
      | null,
    intersectionObserverCallback: string | IntersectionObserverCallback,
    unobserve?: boolean
  ): void;
}
export const useObserver: IUseObserver = (
  options,
  elements,
  intersectionObserverCallback,
  unobserve = false
) => {
  useEffect(() => {
    const refElement = elements;
    let observer: IntersectionObserver;
    if (refElement === null) return; //  <--------------------------------------------------------------------------------<Needs to be checked;
    // if (typeof intersectionObserverCallback === "function") {
    //   observer = new IntersectionObserver(
    //     intersectionObserverCallback,
    //     options
    //   );
    // } else {
    //   observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.classList.add(intersectionObserverCallback);
    //         unobserve && observer.unobserve(entry.target);
    //       }
    //     });
    //   }, options);
    // }
    observer = new IntersectionObserver(
      typeof intersectionObserverCallback === "function"
        ? intersectionObserverCallback
        : (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(intersectionObserverCallback);
                unobserve && observer.unobserve(entry.target);
              }
            });
          },
      options
    );
    if (Array.isArray(refElement)) {
      refElement.forEach((card) => {
        card.current && observer.observe(card.current);
      });
      return () => {
        refElement.forEach((card) => {
          card.current && observer.unobserve(card.current);
        });
      };
    } else {
      refElement.current && observer.observe(refElement.current);
      return () => {
        refElement.current && observer.unobserve(refElement.current);
      };
    }
  }, [options, elements, intersectionObserverCallback, unobserve]);
};
