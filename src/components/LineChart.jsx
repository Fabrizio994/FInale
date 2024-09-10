import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

export default function ChartLine({ data, dataY, dataX, domain }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth - 100,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      let widthAdjustment = 100;
      let newHeight = 500;

      if (newWidth < 450) {
        widthAdjustment = 20;
        newHeight = 200;
      } else if (newWidth < 750) {
        widthAdjustment = 75;
        newHeight = 300;
      } else if (newWidth < 900) {
        widthAdjustment = 75;
        newHeight = 400;
      }
      setDimensions({
        width: newWidth > 1200 ? 1200 : newWidth - widthAdjustment,
        height: newHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="chart-container">
      <ResponsiveContainer width={dimensions.width} height={dimensions.height}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={dataX}
            angle={-45}
            textAnchor="end"
            height={50}
            interval="preserveStartEnd"
          />
          <YAxis
            angle={5}
            textAnchor="end"
            domain={domain}
            allowDataOverflow={false}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataY}
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 5 }}
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
