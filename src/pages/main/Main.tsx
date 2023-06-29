import { Link } from "react-router-dom";
import "./main.scss";

// Components
import ImagesStack from "../../components/imageStack/ImageStack";

// Images
import MessiPic from "../../styles/img/Lionel-Messi.webp";

import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import image4 from "./images/4.webp";

const Main = () => {
  return (
    <section id="MainPage" className="flexCenter pageHero">
      <div className="container">
        <ul className="cardsContainer">
          <li onClick={() => "personal"}>Personal </li>
          <li onClick={() => "professional"}>Professional </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;

// {/* <li>
//             <fieldset className="card">
//               <Link to={`/Services`} className="cardHeader">
//                 <h1>{"Services"}</h1>
//               </Link>
//               <div className="cardContent flexCenter">
//                 <div className="">
//                   <Link
//                     to={{ pathname: `/Services`, hash: "#servicesCodeSkills" }}
//                   >
//                     <h3>
//                       {"<Code"}&nbsp;{" "}
//                       <span className="colorSecundBase">{"/"}</span>
//                       {">"}
//                     </h3>
//                     <p>What coding services do you offer?</p>
//                   </Link>
//                   {/* <h3> &nbsp;{"/"}&nbsp;</h3> */}
//                   <Link
//                     to={{ pathname: `/Services`, hash: "#servicesStyleSkills" }}
//                   >
//                     <h3>
//                       {" "}
//                       <span className="colorSecundBase">{"#"}</span>
//                       {"Style"}
//                     </h3>
//                     <p>What styling services do you offer?</p>
//                   </Link>
//                 </div>
//               </div>
//             </fieldset>
//           </li>
//           <li>
//             <fieldset className="card">
//               <Link to={`/Photography`} className="cardHeader">
//                 <h1>{"Photography"}</h1>
//               </Link>
//               <div className="cardContent flexCenter">
//                 <ImagesStack images={[image1, image2, image3, image4]} />
//               </div>
//             </fieldset>
//           </li>
//           <li>
//             <fieldset className="card" id="MainGraphics">
//               <Link to={`/Graphics`} className="cardHeader">
//                 <h1>{"Graphics"}</h1>
//                 <div className="cardContent flexCenter">
//                   <img className="slideLeftAni" src={MessiPic} alt="Graphics" />
//                 </div>
//               </Link>
//             </fieldset>
//           </li>  */}
