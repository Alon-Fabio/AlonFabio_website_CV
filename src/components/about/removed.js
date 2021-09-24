// Round profile picture:

import AlonHeroPhoto from "../../styles/img/about/mini Alon square.jpg";
const [onLoad, setOnLoad] = useState("");
  useEffect(() => {
    setOnLoad("onLoad");
  }, []);

<div className={`${onLoad} photoContainer`}>
  <img src={`${AlonHeroPhoto}`} alt={"to Alon Fabio About page"} />
</div>;

// CSS

.onLoad {
  opacity: 1 !important;
}
.photoContainer {
    opacity: 0;
    background-color: black;
    overflow: hidden;
    border-radius: 50%;
    height: 200px;
    min-height: 200px;
    width: 200px;
    min-width: 200px;
    border: 5px solid $base-color;
    img {
        height: 100%;
        object-fit: contain;
    }
    
    animation: fade-in 2s;

}
@keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
// Profile picture end

// Progress bar
<div className="progressSection">
    <div className="progressContainerLang">
        <div className="progressBar">
            <div
                  id="JS-Progress"
                  className={
                    "animation-element progress-bar-inner javascript-present"
                  }
            ></div>
        </div>
    </div>
</div>
//   CSS

.progressSection {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  .progressContainerLang {
    padding: 10px;
    width: 40%;
    .javascript-present {
      width: 90%;
    }
    .in-view {
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.05)
        );
        transition: 0.2s linear;
        transition-property: width, background-color;
        background-color: $secund-base-color;
        
        animation: progressAni 2s;
      }
    }
  }
  .progressBar {
    margin-bottom: 6px;
    padding: 6px;
    border-radius: 30px;
    background: gray;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
    .progress-bar-inner {
      height: 10px;
      border-radius: 30px;
    }
  }


  // ShowLogo  function

    interface ILogoObj {
    [index: string]: string;
  }

  const progLogos: ILogoObj = {
    mongoLogo,
    nodeLogo,
    dockerLogo,
    redisLogo,
  };
  const frontLogos: ILogoObj = {
    reactLogo,
    sassLogo,
    bootstrapLogo,
  };

<div>

  <h1>What do I do?</h1>
            <h4>I"m a full-stack programmer and designer, at your service!</h4>
            <p>
            I can help you build up your <span>server</span> or{" "}
            <span>REST API</span> or maybe you have a <span>SaaS</span> to
            develop.
            </p>
            <div className="aboutLogos">
            {Object.keys(progLogos).map((key) => {
              return <img src={progLogos[key]} alt={key} key={key} />;
            })}
            </div>
            <p>
            I can help you improve your <span>design</span> or create a brand
            new one made just for you!
            </p>
            <div className="aboutLogos">
              {Object.keys(frontLogos).map((logo) => (
                <img src={frontLogos[logo]} alt={logo} key={logo} />
                ))}
            </div>
</div>