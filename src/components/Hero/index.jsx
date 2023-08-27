import "./style.scss";

import preview from "../../img/hero.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <h1 className="hero__title">$wen pump?</h1>
                    <img src={preview} alt="preview" className="hero__img" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
