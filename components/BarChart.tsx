import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { SubTitle } from "./Title";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  labels: Array<string>;
  data: Array<number>;
  chartoptions?: any;
}

const BarChart: React.FC<BarChartProps> = ({
  title,
  labels,
  data,
  chartoptions,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        label: chartoptions.label,
        data: data,
        backgroundColor: [
          "#83c3f7",
          "#ffd54f",
          "#4fc3f7",
          "#9575cd",
          "#ffa183",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options: any = {
    aspectRatio: 1,
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 20,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: { color: "#757ce8", beginAtZero: true, font: { size: 16 } },
      },
      x: {
        ticks: { color: "#ff7961  ", beginAtZero: true, font: { size: 16 } },
      },
    },
  };

  return (
    <div>
      <SubTitle title={title} />
      <Bar
        data={chartData}
        width={chartoptions.width}
        height={chartoptions.height}
        options={options}
      />
    </div>
  );
};

export default BarChart;
