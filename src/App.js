import { Routes, Route } from "react-router-dom";
import {
  Sidebar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  News,
  SingleCrypto,
} from "./components";
import "./styles/utilities.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/news" element={<News />} />
            <Route path="/cryptos/:coinId" element={<SingleCrypto />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
