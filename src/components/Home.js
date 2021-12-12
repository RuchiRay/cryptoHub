import React from "react";
import '../styles/home.css'
import { useGetCryptosQuery } from '../services/cryptoApi';
const Home = () => {
const {data,isFetching} = useGetCryptosQuery();
console.log(data);

  return <div className="main">
      <h1 className="heading">Global Crypto Stats</h1>
      <div className="home-stats">
          
      </div>
  </div>;
};

export default Home;
