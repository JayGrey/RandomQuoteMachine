const QUOTE_ENDPOINT = "http://quotes.rest/qod";

export const getRandomQuote = async () => {
  const result = await fetch(QUOTE_ENDPOINT);
  if (!result.ok) {
    throw new Error("server response error");
  }
  const response = await result.json();

  return {
    author: response.contents.quotes[0].author,
    text: response.contents.quotes[0].quote
  };
};
