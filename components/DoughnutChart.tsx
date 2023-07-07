import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  title?: string;
  labels: Array<string>;
  data: Array<number>;
  chartoptions?: any;
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  title,
  labels,
  data,
  chartoptions,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "#83c3f7",
          "#ffd54f",
          "#4fc3f7",
          "#9575cd",
          "#ffa183",
          "#c2b0e2",
          "#36A2EB",
          "#ffcf33",
          "#ff6333",
          "#FFC1CE",
          "#c2b0e2",
          "#36A2EB",
          "#d1ff33",
          "#FAC750",
          "#FFC1CE",
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
        title: "",
      },
    },
  };

  return (
    <div className="m-8 md:pl-8 md:w-1/2 xs:w-full">
      <Doughnut
        data={chartData}
        width={chartoptions.width}
        height={chartoptions.height}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
