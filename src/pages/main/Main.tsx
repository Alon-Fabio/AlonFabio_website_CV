import { Link } from "react-router-dom";
import "./main.scss";

import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import image4 from "./images/4.webp";

const Main: React.FC<{ links: Array<string> }> = ({ links }) => {
  return (
    <section id="MainPage" className="flexCenter pageHero">
      <ul>
        {links
          .filter((routeName) => routeName.toString() !== "Main")
          .map((routeName) => (
            <li key={`NavLink-${routeName}`}>
              <Link to={`/${routeName.toString()}`}>
                <h1>{routeName}</h1>
              </Link>
            </li>
          ))}
        <li id="Photography">
          <h1>{"Photography"}</h1>
          <div id="imageSqCon">
            <div className="imageSq">
              <img src={image1} alt=" " />
            </div>
            <div className="imageSq">
              <img src={image2} alt=" " />
            </div>
            <div className="imageSq">
              <img src={image3} alt=" " />
            </div>
            <div className="imageSq">
              <img src={image4} alt=" " />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Main;
