import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const json = await (
        await fetch("https://api.coinpaprika.com/v1/tickers")
      ).json();
      setCoins(json);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>The Coin!</h1>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <ul>
              {coins.map((coin) => (
                <li value={coin.name} key={coin.id} usd={coin.quotes.USD.price}>
                  {coin.name} {coin.quotes.USD.price} USD
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
