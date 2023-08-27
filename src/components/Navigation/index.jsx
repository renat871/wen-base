import { NavLink } from "react-router-dom";

import "./style.scss";

const Navigaton = () => {
    const activeLink = "nav__link--active";
    const noramalLink = "nav__link";

    return (
        <section>
            <div className="container">
                <ul className="nav">
                    <li className="nav__item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? activeLink : noramalLink
                            }
                        >
                            /about
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/trade"
                            className={({ isActive }) =>
                                isActive ? activeLink : noramalLink
                            }
                        >
                            /trade_$wen
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/tokenomics"
                            className={({ isActive }) =>
                                isActive ? activeLink : noramalLink
                            }
                        >
                            /tokenomics
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <a href="#!" className="nav__link">
                            /faq
                        </a>
                    </li>
                    <li className="nav__item">
                        <NavLink
                            to="/map"
                            className={({ isActive }) =>
                                isActive ? activeLink : noramalLink
                            }
                        >
                            /map
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Navigaton;
