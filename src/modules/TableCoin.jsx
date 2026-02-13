import React from "react";

import { RotatingLines } from "react-loader-spinner";
import styles from "./TableCoin.module.css";

import TableRow from "./TableRow.jsx";

function TableCoin({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines color="#3874fa" strokeWidth="2" />
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
