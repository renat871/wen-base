import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const App = () => {
    return (
        <div className="App">
            <Router>
                <div className="wrapper">
                    <div className="first">
                        <Header />
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
