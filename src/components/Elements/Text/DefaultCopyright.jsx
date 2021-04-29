import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultCopyright({className, style}) {
  DefaultCopyright.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };

  return (
    <div className={className ? className : ''} style={style}>
      <b>Simple Task List&nbsp;</b>
      <br />
      <a taget="_blank" href="https://www.dominikhaid.de">
        www.dominikhaid.de
      </a>
      &nbsp;&copy;&nbsp;Dominik Haid
    </div>
  );
}
