import React from "react";
import Chart from "react-apexcharts";

export function LineChart({ series }) {
  const config = {
    options: {
      chart: {
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: true
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
        labels: {
          formatter: function(value) {
            var d = new Date(0);
            d.setUTCSeconds(Math.floor(value));
            return d.toLocaleTimeString();
          }
        }
      }
    },
    series
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
