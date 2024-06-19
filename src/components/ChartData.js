import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { customerData } from "../utils/constants";

const ChartData = () => {
  return (
    <Line
      data={{
        labels: customerData.map((data) => data.Year),
        datasets: [
          {
            label: "Customers",
            data: customerData.map((data) => data.customer),
            borderColor: "red",
            backgroundColor: "red",
            color: "red",
          },
        ],
      }}
    ></Line>
  );
};

export default ChartData;
