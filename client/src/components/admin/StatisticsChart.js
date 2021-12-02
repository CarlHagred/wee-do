import React from "react";
import { Line } from "react-chartjs-2";

const StatisticsChart = (props) => {
  const datasets = [];
  const allDates = [];

  props.patientStatistics.forEach((entry) => {
    entry.watchedTime.forEach((time) => {
      if (!allDates.includes(time.substring(0, 10))) {
        allDates.push(time.substring(0, 10));
      }
    });
    allDates.sort();
  });

  const startDate = allDates[0];
  const endDate = allDates.pop();

  const getDates = (startDate, endDate) => {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().substring(0, 10));
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };

  const allDatesComplete = getDates(new Date(startDate), new Date(endDate));

  props.patientStatistics.forEach((entry) => {
    const dataset = {};
    dataset.label = entry.vidId;
    dataset.fill = false;
    dataset.tension = 0.2;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    dataset.borderColor = "#" + randomColor;
    dataset.data = [];
    datasets.push(dataset);

    //skapar datan baserat på alla datum
    for (let i = 0; i < allDatesComplete.length; i++) {
      let count = 0;
      entry.watchedTime.forEach(
        (v) => v.substring(0, 10) === allDatesComplete[i] && count++
      );
      dataset.data.push(count);
    }
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
          labels: allDatesComplete,
          datasets: datasets,
        }}
        options={options}
      />
    </div>
  );
};

export default StatisticsChart;
