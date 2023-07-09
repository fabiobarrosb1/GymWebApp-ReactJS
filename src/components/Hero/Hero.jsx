import React, { useState, useEffect } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isScreenSmall2, setIsScreenSmall2] = useState(window.innerWidth < 865);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall2(window.innerWidth < 884);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text hero-title">Shape </span>
            <span className="hero-title">Your</span>
          </div>
          <div>
            <span className="hero-title">Ideal body</span>
          </div>
          <div className="hero-big-text-div">
            <span className="hero-big-text">
              In here we will help you to shape and build{" "}
              {isScreenSmall && <br />} your ideal body and live up your life to
              fullest!
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert {isScreenSmall2 && <br />}coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members {isScreenSmall2 && <br />}joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="3" preFix="+" />
            </span>
            <span>fitness {isScreenSmall2 && <br />}programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">
            <Link to="programs" smooth={true} spy={true}>
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn btn-hero join-now-btn">
          <Link to="join-us" spy={true} smooth={true}>
            Join Now
          </Link>
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="Hero  Back"
          className="hero-image-back"
        />

        {/* calories  */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="Calories" />
          <div>
            <span>Calories Burned</span> <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
