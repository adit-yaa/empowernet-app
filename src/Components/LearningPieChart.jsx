import React from "react";

import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Task 1",
    days: 4,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name: "Task 2",
    days: 5,
    pv: 4567,
    fill: "#83a6ed"
  },
  {
    name: "Task 3",
    days: 10,
    pv: 1398,
    fill: "#8dd1e1"
  },
  {
    name: "Task 4",
    days: 7,
    pv: 9800,
    fill: "#82ca9d"
  },
  {
    name: "Task 5",
    days: 3,
    pv: 3908,
    fill: "#a4de6c"
  },
  {
    name: "Task 6",
    days: 9,
    pv: 4800,
    fill: "#d0ed57"
  },
  {
    name: "Task 7",
    days: 2,
    pv: 4800,
    fill: "#ffc658"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

function LearningPieChart() {
  return (
    <RadialBarChart
      width={200}
      height={200}
      cx={100}
      cy={100}
      innerRadius={20}
      outerRadius={90}
      barSize={6}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="days"
      />
      <Legend
        iconSize={6}
        width={90}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}

export default LearningPieChart;
