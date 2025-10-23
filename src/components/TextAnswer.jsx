import { useMemo } from 'react';

export const TextAnswer = ({ answers = {}, total = 0 }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  return (
    <div className="card flex justify-content-center">
      {words?.map((word) => {
        let rem = ((answers[word] / total) * 9 + 1)?.toFixed(0);
        return (
          <span
            style={{
              fontSize: `${rem}em`,
              marginLeft: '1rem',
              color: '#611232',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
