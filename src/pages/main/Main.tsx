import { Link } from "react-router-dom";
import "./main.scss";

// Components
import ImagesStack from "../../components/imageStack/ImageStack";

import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import image4 from "./images/4.webp";
import Graphics1 from "./images/1.png";
import Graphics2 from "./images/2.png";

const Main = () => {
  return (
    <section id="MainPage" className="flexCenter pageHero">
      <ul className="cardsContainer ">
        <li>
          <fieldset className="card">
            <Link to={`/Services`} className="cardHeader">
              <h1>{"Services"}</h1>
            </Link>
            <div className="cardContent flexCenter">
              <div className="">
                <Link
                  to={{ pathname: `/Services`, hash: "#servicesCodeSkills" }}
                >
                  <h3>
                    {"<Code"}&nbsp;{" "}
                    <span className="colorSecundBase">{"/"}</span>
                    {">"}
                  </h3>
                  <p>What coding services do you offer?</p>
                </Link>
                {/* <h3> &nbsp;{"/"}&nbsp;</h3> */}
                <Link
                  to={{ pathname: `/Services`, hash: "#servicesStyleSkills" }}
                >
                  <h3>
                    {" "}
                    <span className="colorSecundBase">{"#"}</span>
                    {"Style"}
                  </h3>
                  <p>What styling services do you offer?</p>
                </Link>
              </div>
            </div>
          </fieldset>
        </li>
        <li>
          <fieldset className="card">
            <Link to={`/Photography`} className="cardHeader">
              <h1>{"Photography"}</h1>
            </Link>
            <div className="cardContent flexCenter">
              <ImagesStack images={[image1, image2, image3, image4]} />
            </div>
          </fieldset>
        </li>
        <li>
          <fieldset className="card">
            <Link to={`/Graphics`} className="cardHeader">
              <h1>{"Graphics"}</h1>
            </Link>
            <div className="cardContent flexCenter">
              <ImagesStack images={[Graphics1, Graphics2]} />
            </div>
          </fieldset>
        </li>
      </ul>
    </section>
  );
};

export default Main;
