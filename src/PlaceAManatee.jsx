import React, { PropTypes } from 'react';

const typesToExtensions = {
  bitmap: 'jpg',
  vector: 'svg'
};

export default function PlaceAManatee({ type, width, height, specimen }) {

  const specimenPart = (specimen) ? (specimen + '/') : '';
  const imgUrl = `https://place.manatee.lc/${specimenPart}${width}/${height}.${typesToExtensions[type]}`;
  return (
    <img src={imgUrl} />
  );

};

PlaceAManatee.propTypes = {
  type: PropTypes.oneOf(['bitmap', 'vector']).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  specimen: PropTypes.number
};

PlaceAManatee.defaultProps = {
  type: 'bitmap',
  width: 640,
  height: 480
};
