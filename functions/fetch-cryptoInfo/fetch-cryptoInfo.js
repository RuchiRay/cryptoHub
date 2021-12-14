// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const endPoint = event.queryStringParameters.type;
 console.log('printing query parameters',event.queryStringParameters);
  var axios = require("axios").default;
  var options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/${endPoint}`,
    headers: {
      "x-rapidapi-key": process.env.CRYPTO_API_KEY,
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };
  try {
    const res = await axios(options);
    const {data} = res;
    console.log("print res", data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
  // try {
  //   const subject = event.queryStringParameters.type || 'World'
  //   console.log(event);
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ message: `Hello ${subject}` }),

  //   }
  // } catch (error) {
  //   return { statusCode: 500, body: error.toString() }
  // }
};

module.exports = { handler };
