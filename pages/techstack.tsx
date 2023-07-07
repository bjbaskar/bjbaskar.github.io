import React, { FC } from "react";

import Container from "../components/Container";
import { Title } from "../components/Title";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import { UIdata, MSdata } from "../data/index";

const TechStack: React.FC = () => {
  return (
    <Container>
      <div className="h-[100px]" />
      <div className="w-full mx-auto px-8">
        <Title title="Technical Stack" />
        <div className="mt-3 mx-auto flex-wrap grid grid-cols-1 md:grid-cols-2 gap-2">
          <BarChart
            title={"Full Stack Dev & Mobile Apps"}
            labels={UIdata.map((d) => d.key)}
            data={UIdata.map((d) => d.value)}
            chartoptions={{ width: 700, height: 700, label: "Web UI" }}
          />

          <div className="flex w-full">
            <DoughnutChart
              labels={UIdata.map((d) => d.key)}
              data={UIdata.map((d) => d.value)}
              chartoptions={{ width: 150, height: 150 }}
            />
          </div>
        </div>

        <div className="mt-8 mx-auto flex-wrap grid grid-cols-1 md:grid-cols-2 gap-2">
          <BarChart
            title={"Microsoft Tech Stack"}
            labels={MSdata.map((d) => d.key)}
            data={MSdata.map((d) => d.value)}
            chartoptions={{
              width: 700,
              height: 700,
              label: "Microsoft Tech Stack",
            }}
          />

          <div className="flex w-full">
            <DoughnutChart
              labels={MSdata.map((d) => d.key)}
              data={MSdata.map((d) => d.value)}
              chartoptions={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TechStack;
