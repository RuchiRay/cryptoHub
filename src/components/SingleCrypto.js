import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleCryptoQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
const SingleCrypto = () => {
  const { coinId } = useParams();
//   const { data, isFetching } = useGetSingleCryptoQuery(coinId);
//   console.log('coin data',data);
  const [timePeriod, setTimePeriod] = useState("3h");
  console.log('time period',timePeriod);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    console.log('coin history',coinHistory);
    console.log('coin id',coinId);

  return <div></div>;
};

export default SingleCrypto;
