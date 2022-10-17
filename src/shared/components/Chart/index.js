import React from "react";

import { Line } from "@ant-design/charts";

const App = () => {
  const myData = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 11 },
    { x: 4, y: 9 },
    { x: 5, y: 14 },
    { x: 6, y: 19 },
    { x: 7, y: 17 },
    { x: 8, y: 22 },
    { x: 9, y: 24 },
    { x: 10, y: 23 },
  ];

  return (
    <Line
      data={myData}
      xAxis={{ tickCount: 4 }}
      smooth={true}
      height={150}
      xField="x"
      yField="y"
      color="blue"
    />
  );
};

export default App;
