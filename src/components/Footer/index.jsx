import "./style.scss";

import twitter from "../../img/twitter.png";
import discord from "../../img/discord.png";
import telegram from "../../img/telegram.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <a href="#!" className="footer__link">
                        <img src={twitter} alt="ico" />
                    </a>
                    <a href="#!" className="footer__link">
                        <img src={discord} alt="ico" />
                    </a>
                    <a href="#!" className="footer__link">
                        <img src={telegram} alt="ico" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
