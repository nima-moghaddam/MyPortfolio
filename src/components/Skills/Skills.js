import React from "react";
import classes from "./Skills.module.css";
import css3 from "./../../assets/img-skills/css3.svg";
import html5 from "./../../assets/img-skills/html5.svg";
import js from "./../../assets/img-skills/javascript.svg";
import reactIc from "./../../assets/img-skills/reactjs.svg";
import reduxIc from "./../../assets/img-skills/redux.svg";
import npmIc from "./../../assets/img-skills/npm.svg";

const Skills = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={classes.skills}>
      <div className={classes.skills_top}>
        <div>
          <img src={css3} />
          <p>CSS3 , flexbox</p>
        </div>
        <div>
          <img src={html5} />
          <p>HTML5</p>
        </div>
        <div>
          <img src={js} />
          <p>JavaScript , ES6</p>
        </div>
      </div>
      <div className={classes.skills_bot}>
        <div>
          <img src={reactIc} />
          <p>React , Hooks</p>
        </div>
        <div>
          <img src={reduxIc} />
          <p>Redux</p>
        </div>
        <div>
          <img src={npmIc} />
          <p>npm , GitHub</p>
        </div>
      </div>
    </section>
  );
});

export default Skills;
