import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
}
// const baseUrl = 'https://coinranking1.p.rapidapi.com'
const baseUrl = `/.netlify/functions/fetch-cryptoInfo`

const createRequest = (url)=>({url})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest(`?type=coins&name=exchange`)
        })
    })
})
export const {useGetCryptosQuery} = cryptoApi