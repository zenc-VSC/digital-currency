import React from "react";
import chartDown from "../assets/chart-down.svg";
import chartUp from "../assets/chart-up.svg";
import styles from "./TableRow.module.css";

function TableRow({
  coin: {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_change,
    total_volume,
  },
}) {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt="coinImage" />
          {symbol.toUpperCase()}
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="coinChart" />
      </td>
    </tr>
  );
}

export default TableRow;
