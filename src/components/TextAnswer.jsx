import { useMemo } from 'react';

export const TextAnswer = ({ answers = {} }) => {
  const words = useMemo(() => {
    let _words = Object.keys(answers).length ? Object.keys(answers) : [];
    return _words;
  }, [answers]);
  function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * numPosibilidades;
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + aleatorio;
  }

  let hexadecimal = new Array(
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  );
  let color_aleatorio = '#';
  for (let i = 0; i < 6; i++) {
    let posarray = aleatorio(0, hexadecimal.length);
    color_aleatorio += hexadecimal[posarray];
  }
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
              color: color_aleatorio,
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
