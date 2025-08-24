import { Chart } from "primereact/chart";
import { useMemo, useState } from "react";

const ChartAnswer = ({ verdadero, falso, total }) => {
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  const chart = useMemo(() => {
    let labels = [
      `Verdadero ${total ? ((100 / total) * verdadero).toFixed(1) : 0}%`,
      `Falso  ${total ? ((100 / total) * falso).toFixed(1) : 0}%`,
    ];

    return {
      labels,
      datasets: [
        {
          data: [verdadero, falso],
          backgroundColor: ["#feedaf", "#c8e6c9"],
        },
      ],
    };
  }, [verdadero, falso, total]);

  return (
    <div className="justify-content-center">
      <div className="card flex ">
        <Chart
          type="pie"
          data={chart}
          options={lightOptions}
          style={{ position: "relative", width: "80%" }}
        />
      </div>
    </div>
  );
};

export default ChartAnswer;
