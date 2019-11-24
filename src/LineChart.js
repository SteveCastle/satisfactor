import React from "react";
import Chart from "react-apexcharts";

export function LineChart({ data }) {
  const config = {
    options: {
      chart: {
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0
      },
      title: {
        text: "Ratings",
        align: "left"
      },
      xaxis: {
        type: "datetime"
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
