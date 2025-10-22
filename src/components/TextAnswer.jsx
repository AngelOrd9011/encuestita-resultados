import { useMemo } from 'react';

export const TextAnswer = ({ answers = {} }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  return (
    <div className="card flex justify-content-center">
      {words?.map((word) => {
        return (
          <span
            style={{
              fontSize: `${answers[word] > 10 ? 10 : answers[word]}em`,
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
