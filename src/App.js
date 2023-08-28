import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    EthereumClient,
    w3mConnectors,
    w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { base } from "wagmi/chains";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navigaton from "./components/Navigation";
import About from "./pages/about";
import Trade from "./pages/trade";
import Tokenomics from "./pages/tokenomics";
import Map from "./pages/map";

import "./styles/reset.scss";
import "./styles/style.scss";


const chains = [base];
const projectId = "136551f6feb9cac3ff2cde8e4ba82670";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App = () => {
    return (
        <div className="App">
            <Router>
                <div className="wrapper">
                    <div className="first">
                        <WagmiConfig config={wagmiConfig}>
                            <Header />
                        </WagmiConfig>
                        <Web3Modal
                            projectId={projectId}
                            ethereumClient={ethereumClient}
                        />
                        <Hero />
                        <Navigaton />
                    </div>
                    <div className="second">
                        <Routes>
                            <Route path="/" element={<About />} />
                            <Route path="/trade" element={<Trade />} />
                            <Route
                                path="/tokenomics"
                                element={<Tokenomics />}
                            />
                            <Route path="/map" element={<Map />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default App;
