import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  let [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [sortOrder, setSortOrder] = useState('');

  const reset = () => {
    setVisibleGoods(goodsFromServer);
    setSortOrder('');
  };

  const sortAlphabetically = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.localeCompare(good2)),
    );
    setSortOrder('alphabetical');
  };

  const sortByLength = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.length - good2.length),
    );
    setSortOrder('length');
  };

  const reverse = () => {
    setVisibleGoods([...visibleGoods].reverse());
    setSortOrder('reversed');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={sortAlphabetically}
          type="button"
          className={`button is-info ${sortOrder === 'alphabetical' ? '' : 'is-light'}`}
        >
          Sort alphabetically
        </button>

        <button
          onClick={sortByLength}
          type="button"
          className={`button is-success ${sortOrder === 'length' ? '' : 'is-light'}`}
        >
          Sort by length
        </button>

        <button
          onClick={reverse}
          type="button"
          className={`button is-warning ${sortOrder === 'reversed' ? '' : 'is-light'}`}
        >
          Reverse
        </button>

        {visibleGoods !== goodsFromServer && (
          <button
            onClick={reset}
            type="button"
            className="button is-danger is-light"
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
