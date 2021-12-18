import React from 'react'
import GlobalStats from './GlobalStats'
import { Cryptocurrencies,News } from '../../components';
const HomePage = () => {
 
    return (
        <div>
           <GlobalStats/> 
           <Cryptocurrencies less/>
           <News less/>
        </div>
    )
}

export default HomePage
