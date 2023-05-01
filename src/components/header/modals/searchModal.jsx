/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { search } from '../../../utils/search';

import SingleSearchResult from './singleSearchResult';
import './searchModal.scss';

const SearchModal = ({ redirect, close, list = [] }) => {
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef();

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [inputRef.current]);

  useEffect(() => {
    if (!inputValue.length) {
      setResults([]);
      return;
    }
    const results = search(inputValue, list);
    setResults(results);
  }, [inputValue]);

  return (
    <div id='search_modal'>
      <button className='action-button close-button' onClick={close}>
        <i className='fa-solid fa-circle-xmark' />
      </button>
      <div className='search-input'>
        <i className='fa-solid fa-search' />
        <input
          type='text'
          className='search'
          placeholder='Search'
          value={inputValue}
          onChange={inputChangeHandler}
          ref={inputRef}
        />
      </div>
      <div className='results'>
        {results.map((result) => (
          <SingleSearchResult
            key={result.name}
            result={result}
            redirect={redirect}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchModal;
