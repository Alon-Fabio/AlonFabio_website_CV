import { Link } from "react-router-dom";
import "./main.scss";

const Main: React.FC<{ links: Array<string> }> = ({ links }) => {
  console.log(links);
  return (
    <section id="MainPage" className="flexCenter pageHero">
      <ul>
        {links
          .filter((routeName) => routeName.toString() !== "Main")
          .map((routeName) => (
            <li key={`NavLink-${routeName}`}>
              <Link to={`/${routeName.toString()}`}>{routeName}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Main;
