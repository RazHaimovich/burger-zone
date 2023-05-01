/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import SingleSearchResult from './singleSearchResult';
import OutsideDetector from '../../OutsideDetector';
import { search } from '../../../utils/search';
import { usePopper } from 'react-popper';
import './searchInput.scss';

const SearchInput = ({ list, redirect }) => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const resultsRef = useRef();
  const inputRef = useRef();

  const { styles, attributes, update } = usePopper(
    inputRef.current,
    resultsRef.current,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'flip',
          enabled: false,
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: 10,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const lookForResults = () => {
    if (!inputValue.length) {
      setResults([]);
      return;
    }
    const results = search(inputValue, list);
    setResults(results);
    if (update) update();
  };

  useEffect(() => {
    lookForResults();
  }, [inputValue, document.activeElement, inputRef.current]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const redirectWithHide = (url) => {
    setResults([]);
    setInputValue('');
    redirect(url);
  };

  const close = () => {
    setResults([]);
  };

  return (
    <div className='search-area'>
      <OutsideDetector close={close}>
        <>
          <div className='search-input'>
            <i className='fa-solid fa-search' />
            <input
              type='text'
              className='search'
              placeholder='Search'
              ref={inputRef}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div
            className='results'
            ref={resultsRef}
            style={styles.popper}
            {...attributes.popper}
          >
            {!!results.length && (
              <div className='results-list'>
                {results.slice(0, 3).map((result) => (
                  <SingleSearchResult
                    result={result}
                    redirect={redirectWithHide}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      </OutsideDetector>
    </div>
  );
};

export default SearchInput;
