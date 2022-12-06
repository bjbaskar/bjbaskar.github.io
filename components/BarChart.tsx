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
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options: any = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 8,
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
