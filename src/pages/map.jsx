import first from "../img/map/first.png";
import second from "../img/map/second.png";
import third from "../img/map/third.png";
import fourth from "../img/map/fourth.png";

const Map = () => {
    return (
        <section className="map">
            <div className="container">
                <div className="map__inner">
                    <div className="map__item">
                        <div className="map__top">
                            <p className="map__text">$wen token fair launch</p>
                            <img src={first} alt="bg" className="map__img" />
                        </div>
                        <a
                            href="https://leetswap.finance/"
                            className="map__bottom map__bottom--active"
                            target="_blank"
                            rel="noreferrer"
                        >
                            trade
                        </a>
                    </div>
                    <div className="map__item">
                        <div className="map__top">
                            <p className="map__text">retrodrop prediction market </p>
                            <img src={second} alt="bg" className="map__img" />
                        </div>
                        <a
                            href="#!"
                            className="map__bottom"
                        >
                            soon
                        </a>
                    </div>
                    <div className="map__item">
                        <div className="map__top">
                            <p className="map__text">spam tnx on base for future $base token</p>
                            <img src={third} alt="bg" className="map__img" />
                        </div>
                        <a
                            href="#!"
                            className="map__bottom"
                        >
                            soon
                        </a>
                    </div>
                    <div className="map__item">
                        <div className="map__top">
                            <p className="map__text">$wen airdrop with $base release</p>
                            <img src={fourth} alt="bg" className="map__img" />
                        </div>
                        <a
                            href="#!"
                            className="map__bottom"
                        >
                            soon
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
