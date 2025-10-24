import { useMemo } from 'react';

export const TextAnswer = ({ answers = {} }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  return (
    <div className="flex flex-wrap justify-content-center">
      {words?.map((_word) => {
        let word = isNaN(_word) ? _word : `(${_word})`;
        let rem = answers[_word] >= 15 ? 15 : answers[_word];
        return (
          <span
            style={{
              fontSize: `${rem}em`,
              marginLeft: '1rem',
              color: '#611232',
              display: 'inline-block',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
