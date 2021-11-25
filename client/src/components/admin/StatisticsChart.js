import React from "react";
import { Line } from "react-chartjs-2";

const StatisticsChart = (props) => {
  const datasets = [];
  const labels = [];

  props.patientStatistics.map((entry) => {
    console.log(entry.watchedTime[0]);
    const date = new Date(entry.watchedTime[0]);
    console.log(date);

    const dataset = {};
    dataset.label = entry.vidId;
    dataset.fill = false;
    dataset.tension = 0.2;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    dataset.borderColor = "#" + randomColor;
    dataset.data = [];
    datasets.push(dataset);

    //skapar x-axelns labels
    entry.watchedTime.map((time) => {
      if (!labels.includes(time.substring(0, 10))) {
        labels.push(time.substring(0, 10));
      }
    });
    console.log(labels);

    //skapar datan
    for (let i = 0; i < labels.length; i++) {
      let count = 0;
      entry.watchedTime.forEach(
        (v) => v.substring(0, 10) === labels[i] && count++
      );
      dataset.data.push(count);
    }
    console.log(dataset);
  });

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  return (
    <div>
      <Line
        height={300}
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={options}
      />
    </div>
  );
};

export default StatisticsChart;
