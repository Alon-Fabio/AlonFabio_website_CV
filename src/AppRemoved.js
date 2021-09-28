// Hooks
import { useEventListener } from "./hooks/useEventListener";

// Triggers the progressBar in the about page.
const [aboutProgBar, setAboutProgBar] = useState(false);

const scrollTrigger = (
  offset = 0,
  className: string,
  element: HTMLElement | string,
  callback?: (
    data?: any
  ) => void | React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (typeof element !== "string" && element === undefined)
    return console.error(
      "scrollTrigger: needs the elements Id (string of the elements ID) or an element (an HTML element)."
    );
  let el;
  if (typeof element === "string") el = document.getElementById(element);
  el = el || element;
  if (typeof el !== "object")
    return console.error(
      "scrollTrigger: Element is null/undefined. Insert the Id of the element."
    );
  let trigger = el.offsetTop;

  if (
    window.pageYOffset + window.innerHeight + offset >= trigger &&
    !aboutProgBar
  ) {
    if (el.className.includes(` ${className} `)) return;
    el.className += ` ${className} `;
    if (callback) callback();
  }
};

const scrollDetect = () => {
  // Trigger the progress bar in the About page
  if (route === "About" && !aboutProgBar) {
    scrollTrigger(0, "in-view", "aboutStyleSkills", () =>
      setAboutProgBar(true)
    );
  }
};

useEventListener({ type: "scroll", listener: scrollDetect });
