// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const endPoint = event.queryStringParameters.type;
  const limit = event.queryStringParameters.limit || 100;
  const offset = event.queryStringParameters.offset || 0;
  const id = event.queryStringParameters.id ;
  const timePeriod = event.queryStringParameters.timePeriod ;
  
  let link = ''
  if(endPoint==='coin')
  link = `https://api.coinranking.com/v2/coin/${id}`
  else if(endPoint==='history')
  link = `https://api.coinranking.com/v2/coin/${id}/history?timePeriod=${timePeriod}`
  else
  link = `https://api.coinranking.com/v2/${endPoint}?limit=${limit}&&offset=${offset}`

  console.log("printing query parameters", event.queryStringParameters);
  var axios = require("axios").default;
  var options = {
    method: "GET",
    url:link ,
    headers: {
      "x-access-token": process.env.CRYPTO_API_KEY,
    },
  };
  try {
    const res = await axios(options);
    const { data } = res;
    console.log("print res", data);
    console.log('print url',options.url);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
 
};

module.exports = { handler };
