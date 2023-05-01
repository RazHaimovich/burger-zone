/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const OutsideDetector = ({ children, close, className, id }) => {
  const detectorRef = useRef(null);

  const handleClickOutside = (event) => {
    if (detectorRef.current && !detectorRef.current.contains(event.target)) {
      close(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={detectorRef} className={className} id={id}>
      {children}
    </div>
  );
};

OutsideDetector.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default OutsideDetector;
