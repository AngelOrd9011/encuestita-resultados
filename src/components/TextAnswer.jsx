import { useMemo } from 'react';

export const TextAnswer = ({ answers = {}, total = 0 }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  return (
    <div className="card flex justify-content-center">
      {words?.map((_word) => {
        let word = isNaN(_word) ? _word : `(${_word})`;
        let rem = answers[word] >= 15 ? 15 : answers[word];
        return (
          <span
            style={{
              fontSize: `${rem}em`,
              marginLeft: '1rem',
              color: '#611232',
              display: 'block',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
