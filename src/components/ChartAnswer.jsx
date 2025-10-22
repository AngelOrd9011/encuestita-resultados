import { Chart } from 'primereact/chart';
import { useMemo, useState } from 'react';

const ChartAnswer = ({ answers = {}, total }) => {
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
  });

  const chart = useMemo(() => {
    let labels = Object?.keys(answers)?.length
      ? Object?.keys(answers).map((key) => {
          return `${key}: ${
            total ? ((100 / total) * answers[key]).toFixed(1) : 0
          }%`;
        })
      : [];

    let data = Object?.values(answers)?.length ? Object?.values(answers) : [];

    return {
      labels,
      datasets: [
        {
          data,
        },
      ],
    };
  }, [answers, total]);

  return (
    <div className="card flex justify-content-center">
      <Chart
        type="pie"
        data={chart}
        options={lightOptions}
        style={{ position: 'relative', width: '80%' }}
      />
    </div>
  );
};

export default ChartAnswer;
