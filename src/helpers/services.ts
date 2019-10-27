// const QUOTE_ENDPOINT = "http://quotes.rest/qod";

const QUOTE_ENDPOINT = "https://fcc-server.herokuapp.com/rqm";


export const getRandomQuote = async () => {
  const result = await fetch(QUOTE_ENDPOINT);
  if (!result.ok) {
    throw new Error("server response error");
  }
  const response = await result.json();

  return {
    author: response.author,
    text: response.text
  };
};
