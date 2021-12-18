import React from "react";
import "../../styles/home.css";
import { AiFillMoneyCollect } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiBarChartBoxFill, RiBankFill } from "react-icons/ri";

import { useGetStatsQuery } from "../../services/cryptoApi";
import millify from "millify";
const GlobalStats = () => {
  const { data, isFetching } = useGetStatsQuery();
  const stats = data?.data;
  console.log(stats);
  // let statsArray = [{heading:'Total Cryptocurrencies'},{heading:'Total Markets'},{heading:'Total exchanges'},{heading:'Total market cap'},{heading:'Total 24h volume'}]
  // statsArray = Object.keys(stats).map((stat,index)=>{
  //   return {...statsArray[index],value:stats[stat]}
  // })
  // console.log(statsArray);

  if (isFetching) return <h1>Loading</h1>;

  return (
    <div >
      <h1 className="heading">Global Crypto Stats</h1>
      <div className="home-stats">
        <div className="stat-wrapper">
          <div className="stat-icon flex" style={{backgroundColor:'#c2f1e6'}}>
            <BsCurrencyExchange color="#16C79A" />
          </div>
          <div className="stat-att">
            <p className="stat-title">Total Cryptocurrencies</p>
            <p className="stat-value">{millify(stats.totalCoins)}</p>
          </div>
        </div>
        <div className="stat-wrapper">
          <div className="stat-icon flex" style={{backgroundColor:'#e4b8bf'}}>
            <RiBankFill color="#E94560" />
          </div>
          <div className="stat-att">
            <p className="stat-title">Total Markets</p>
            <p className="stat-value">{millify(stats.totalMarkets)}</p>
          </div>
        </div>

        <div className="stat-wrapper">
          <div className="stat-icon flex" style={{backgroundColor:'#fcf9e7'}}>
            <HiCurrencyDollar color="#FFE300" />
          </div>
          <div className="stat-att">
            <p className="stat-title">Total Market Cap</p>
            <p className="stat-value">{millify(stats.totalMarketCap)}</p>
          </div>
        </div>
        <div className="stat-wrapper">
          <div className="stat-icon flex" style={{backgroundColor:'#b1ced6'}}>
            <AiFillMoneyCollect color="#1597BB" />
          </div>
          <div className="stat-att">
            <p className="stat-title">Total Exchanges</p>
            <p className="stat-value">{millify(stats.totalExchanges)}</p>
          </div>
        </div>
        <div className="stat-wrapper">
          <div className="stat-icon flex" style={{backgroundColor:'#e4c2b2'}}>
            <RiBarChartBoxFill color="#FF5403" />
          </div>
          <div className="stat-att">
            <p className="stat-title">Total 24h Volume</p>
            <p className="stat-value">{millify(stats.total24hVolume)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
