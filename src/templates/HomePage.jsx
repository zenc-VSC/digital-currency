import React, { useEffect, useState } from "react";

import TableCoin from "../modules/TableCoin.jsx";
import { getCoinList } from "../services/cryptoApi.js";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
