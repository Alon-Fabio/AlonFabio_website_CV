import { Link } from "react-router-dom";
import "./main.scss";

// Components
import ImagesStack from "../../components/imageStack/ImageStack";

import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import image4 from "./images/4.webp";

const Main = () => {
  return (
    <section id="MainPage" className="flexCenter pageHero">
      <ul>
        <li>
          <Link to={`/Services`}>
            <h1>{"Services"}</h1>
          </Link>
          <div>
            <Link to={{ pathname: `/Services`, hash: "#servicesStyleSkills" }}>
              <h3>
                {" "}
                <span className="colorSecundBase">{"#"}</span>
                {"Style"}
              </h3>
            </Link>
            <h3> &nbsp;{"/"}&nbsp;</h3>
            <Link to={{ pathname: `/Services`, hash: "#servicesCodeSkills" }}>
              <h3>
                {"<Code"}&nbsp; <span className="colorSecundBase">{"/"}</span>
                {">"}
              </h3>
            </Link>
          </div>
        </li>
        <li>
          <Link to={`/Photography`}>
            <h1>{"Photography"}</h1>
          </Link>

          <ImagesStack images={[image1, image2, image3, image4]} />
        </li>
      </ul>
    </section>
  );
};

export default Main;
