import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import ReactMarkdown from "react-markdown";
// import file from "../../Articles/5.md";
// @ts-ignore
let files: Array<string> = [];

const MDArticle = () => {
  const [MDArticle, setMDArticle] = useState([""]);

  const md = require("../../Articles/5.md");
  useEffect(() => {
    let fileExcites = true;
    let i = 0;

    while (fileExcites && i < 8) {
      let dir = import(`../../Articles/${i}.md`).catch(() => {
        return false;
      });
      console.log(
        dir.catch(() => {
          return false;
        }),
        i
      );
      // @ts-ignore
      if (dir !== false) {
        // @ts-ignore
        // console.log(dir, "TEST");

        // @ts-ignore
        fetch(dir)
          .then((res) => res.text())
          .then((res) => {
            setMDArticle((prevState) => [...prevState, res]);
          });
        i++;
      } else {
        i++;
        console.log(files, "Not a string");

        fileExcites = false;
      }
    }
  }, []);

  console.log(MDArticle, "Is it empty?");
  return (
    <section>
      {/* <div>{MDTitle}</div> */}

      {/* <ReactMarkdown children={MDArticle[5]} remarkPlugins={[]} /> */}
    </section>
  );
};

MDArticle.propTypes = {};

export default MDArticle;
