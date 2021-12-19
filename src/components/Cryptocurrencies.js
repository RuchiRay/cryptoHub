import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import {
  BsArrowDown,
  BsArrowUp,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import millify from "millify";
import "../styles/crypto-home.css";
const Cryptocurrencies = ({ less }) => {
  const count = less ? "10" : "100";
  const [offset, setOffset] = useState(0);
  const { data, isFetching } = useGetCryptosQuery({
    limit: count,
    offset: offset,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const coins = data?.data.coins;
  const [coinList, setCoinList] = useState();
  useEffect(() => {
    const filtered = coins?.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm);
    });
    setCoinList(filtered);
  }, [searchTerm, coins]);
  console.log(coinList);

  const handleNext = () => {
    setOffset((prev) => prev + 100);
  };
  const handlePrev = () => {
    setOffset((prev) => prev - 100);
  };

  if (isFetching) return <h1>Loading.......</h1>;
  return (
    <div>
      {less ? (
        <div className="heading-wrapper">
          <h1 className="heading">Top 10 Cryptos in the World</h1>
          <Link className="show-more" to="/cryptocurrencies">
            Show-More
          </Link>
        </div>
      ) : (
        <div>
          <div className="search-crypto flex">
            <input
              type="text"
              placeholder="Search cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="prev-next ">
            <button
              className="prev flex"
              style={{ pointerEvents: offset === 0 ? "none" : "auto" }}
              onClick={handlePrev}
            >
              <BsArrowLeft />
            </button>
            <button className="next flex" onClick={handleNext}>
              <BsArrowRight />
            </button>
          </div>
        </div>
      )}{" "}
      <div className={less ? "crypto-wrapper" : "crypto-wrapper flex"}>
        {coinList?.map((coin) => {
          const { change, iconUrl, marketCap, name, price, uuid, rank } = coin;
          return (
            <Link key={uuid} to={`/cryptos/${uuid}`} className="crypto flex">
              <div className="crypto-heading flex">
                <div className="crypto-rank">{rank}.</div>
                <p className="crypto-name"> {name}</p>
              </div>
              <div className="crypto-icon">
                <img src={iconUrl} alt="" />
              </div>
              <div className="crypto-info">
                <div>
                  <p>Price</p>
                  <h1>{millify(price)}</h1>
                </div>
                <div>
                  <p>Market Cap</p>
                  <h1>{millify(marketCap)}</h1>
                </div>
                <div>
                  <p>Daily Change</p>
                  <h1
                    className="daily-change"
                    style={{ color: change < 0 ? "red" : "#16c79a" }}
                  >
                    {change}
                    {change < 0 ? <BsArrowDown /> : <BsArrowUp />}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
