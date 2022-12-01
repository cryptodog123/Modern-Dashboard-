import { Chart } from "https://esm.sh/chart.js@4.0.1/auto";
const activityTab = document.querySelector(".main-small");

const addActivity = function (dataArr) {
  const checkColor = (num) => {
    return num > 0 ? "pos" : "neg";
  };

  console.log("Hello");

  dataArr.forEach((obj) => {
    const markup = `
          <li>
            <p class="description">${obj.description}</p>
            <p class="date">${obj.date}</p>
            <span class="${checkColor(obj.sum)}"> € ${obj.sum}</span>
          </li>
          `;
    activityTab.insertAdjacentHTML("beforeend", markup);
  });
};

const dataObject = [
  {
    description: "Fixed Savings Credited",
    date: "11/02/2019 8:25 PM",
    sum: 525500,
  },
  {
    description: "Fixed Savings Credited",
    date: "11/02/2019 9:49 PM",
    sum: -11920,
  },
  {
    description: "Obi-Wan Kenobi",
    date: "10/02/2019 11:15 PM",
    sum: 194204,
  },
  {
    description: "James Cutler",
    date: "9/02/2019 3:12 PM",
    sum: -64521,
  },
  {
    description: "Ronnie Green",
    date: "8/02/2019 12:21 AM",
    sum: 820824,
  },
  {
    description: "Lionel Skyscraper",
    date: "8/02/2019 5:41 AM",
    sum: 62178,
  },
  {
    description: "Eren Spyder",
    date: "7/02/2019 1:39 PM",
    sum: 34672,
  },
  {
    description: "Gon Fritz",
    date: "5/02/2019 8:25 PM",
    sum: -620,
  },
  {
    description: "Naruto Akatsuki",
    date: "4/02/2019 6:52 PM",
    sum: 28201,
  },
  {
    description: "James Hook",
    date: "4/02/2019 1:45 AM",
    sum: -6452,
  },
];

addActivity(dataObject);

///////////////////// Charts

const ctxBar = document.getElementById("myChart").getContext("2d");

let gradient = ctxBar.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgb(1, 166, 185)");
gradient.addColorStop(0.5, "rgb(104, 130, 213)");
gradient.addColorStop(1, "rgb(104, 130, 213)");

const labelsBar = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dataBar = {
  labels: labelsBar,
  datasets: [
    {
      label: "Income",
      data: [25, 21, 19, 23, 28, 27, 31, 32, 29, 26, 29, 23],
      backgroundColor: gradient,
      borderWidth: 1,
    },
  ],
};

const configBar = {
  type: "bar",
  data: dataBar,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Monthly Revenue",
        color: "rgb(210,210,210)",
        font: {
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value + "m";
          },
        },
      },
    },
  },
};

new Chart(ctxBar, configBar);

// DOUGHNUT CHART

const ctxDough = document.getElementById("myChart2").getContext("2d");
let gradientDough1 = ctxDough.createLinearGradient(0, 0, 0, 400);
gradientDough1.addColorStop(0, "rgb(191, 94, 187)");
gradientDough1.addColorStop(0.5, "rgb(64, 63, 215)");
let gradientDough2 = ctxDough.createLinearGradient(0, 0, 0, 400);
gradientDough2.addColorStop(0, "rgb(1, 166, 185)");
gradientDough2.addColorStop(0.5, "rgb(104, 130, 213)");

const dataDough = {
  labels: ["Digital", "Real World"],
  datasets: [
    {
      label: "Advertising",
      data: [65, 35],
      backgroundColor: [gradientDough1, gradientDough2],
      hoverOffset: 3,
      weight: [0.1],
      borderWidth: 0,
    },
  ],
};

const configDough = {
  type: "doughnut",
  data: dataDough,
  options: {
    plugins: {
      legend: {
        display: true,
        color: "rgb(210,210,210)",
        labels: {
          padding: 10,
          boxWidth: 8,
          padding: 8,
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: "Advertising Expense",
        color: "rgb(210,210,210)",
        font: {
          size: 15,
        },
      },
    },
    cutout: "80%",
  },
};

new Chart(ctxDough, configDough);
