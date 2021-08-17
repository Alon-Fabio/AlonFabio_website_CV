// Credit to Tobias Lindström (github https://github.com/gunnarx2) from his blog https://tobbelindstrom.com/blog/useEventListener/ who did a fantastic job with this hook and the appendages

import { useEffect, useRef, useCallback, RefObject } from "react";
import { isSSR, getRefElement } from "../functions/general";

interface UseEventListener {
  type: keyof WindowEventMap;
  listener: EventListener;
  element?: RefObject<Element> | Document | Window | null;
  options?: AddEventListenerOptions;
}

export const useEventListener = ({
  type,
  listener,
  element = isSSR ? undefined : window,
  options,
}: UseEventListener): void => {
  const savedListener = useRef<EventListener>();

  useEffect(() => {
    savedListener.current = listener;
  }, [listener]);

  const handleEventListener = useCallback((event: Event) => {
    savedListener.current?.(event);
  }, []);

  useEffect(() => {
    const target = getRefElement(element);
    target?.addEventListener(type, handleEventListener, options);
    return () => target?.removeEventListener(type, handleEventListener);
  }, [type, element, options, handleEventListener]);
};
