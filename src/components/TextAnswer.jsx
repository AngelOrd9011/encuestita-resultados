import { useMemo } from 'react';

export const TextAnswer = ({ answers = {}, total = 0 }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  return (
    <div className="flex justify-content-center" style={{ width: '100%' }}>
      {words?.map((_word) => {
        let word = isNaN(_word) ? _word : `(${_word})`;
        let rem = answers[_word] >= 15 ? 15 : answers[_word];
        return (
          <div>
            <span
              style={{
                fontSize: `${rem}em`,
                marginLeft: '1rem',
                color: '#611232',
              }}
            >
              {word}
            </span>
          </div>
        );
      })}
    </div>
  );
};
