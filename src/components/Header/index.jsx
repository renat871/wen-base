import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance } from "wagmi";

import "./style.scss";

import logo from "../../img/logo.png";

const Header = () => {
    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    console.log(address);
    const { data: wen } = useBalance({
        address: address,
        chainId: 8453,
        token: "0xafe410fcFA636ce94Ba118a1aDb18453E3Adad2b",
    });
    const { data: eth } = useBalance({
        address: address,
        chainId: 8453,
    });
    console.log(wen);
    console.log(eth);
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img className="logo__img" src={logo} alt="logo" />
                        <p className="logo__text">$wen$base</p>
                    </div>
                    <div className="wallet">
                        {isConnected && wen && eth ? (
                            <div className="wallet__data">
                                <p
                                    className="wallet__address"
                                    onClick={() => open()}
                                >
                                    {address}
                                </p>
                                <br />
                                <div className="wallet__balance">
                                    <span className="wallet__wen">
                                        {wen.formatted} $WEN
                                    </span>
                                    <span className="wallet__eth">
                                        {eth.formatted} $ETH
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <a
                                    href="#!"
                                    className="wallet__text"
                                    onClick={() => open()}
                                >
                                    Connect wallet
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
