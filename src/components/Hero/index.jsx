import { TypeAnimation } from "react-type-animation";

import "./style.scss";

import preview from "../../img/hero.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <TypeAnimation
                        sequence={[
                            "$WEN something?",
                            10000,
                            "$WEN $base?",
                            10000,
                            "$WEN binance?",
                            10000,
                            "$WEN moon?",
                            10000,
                            "$WEN shillers?",
                            10000,
                        ]}
                        wrapper="h1"
                        speed={10}
                        repeat={Infinity}
                        cursor={false}
                        className="hero__title"
                    />
                    <img src={preview} alt="preview" className="hero__img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
