import React from "react";
import Chart from "react-apexcharts";

export function LineChart({ data }) {
  const config = {
    options: {
      chart: {
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Ratings",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      }
    },
    series: [
      {
        name: "Sentiment",
        data
      }
    ]
  };

  return (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "100%",
        height: "300px"
      }}
    >
      <Chart
        options={config.options}
        series={config.series}
        type="line"
        width="100%"
      />
    </div>
  );
}
