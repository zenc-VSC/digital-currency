import React from "react";

import { MutatingDots } from "react-loader-spinner";
import styles from "./TableCoin.module.css";

import TableRow from "./TableRow.jsx";

function TableCoin({ coins, isLoading }) {
  console.log(coins);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <MutatingDots color="#3874ff" secondaryColor="#3874ff" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th>chart</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
