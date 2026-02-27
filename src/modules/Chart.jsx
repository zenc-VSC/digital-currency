import { useState } from "react";

import styles from "./Chart.module.css";
import { convertData } from "../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// نام کامپوننت با حرف بزرگ شروع می‌شود
function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  return (
    <div className={styles.container}>
      <span
        className={styles.cross}
        onClick={() => {
          setChart(null);
        }}
      >
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          {/* پراپ type به کامپوننت پاس داده شد */}
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
}

export default Chart;

// پراپ‌ها داخل براکت (آبجکت) دریافت می‌شوند
const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* دیتا مستقیماً از پراپس خوانده می‌شود */}
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
