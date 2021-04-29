import React from 'react';
import DefaultCopyright from 'components/Elements/Text/DefaultCopyright';
import PropTypes from 'prop-types';

export default function DefaultFooter({children}) {
  DefaultFooter.propTypes = {
    children: PropTypes.object,
  };

  return (
    <footer className="max-w-full text-white shadow-inner w-100 p-lg gradient-primary">
      {children}
      <DefaultCopyright style={{textAlign: 'center'}} />
    </footer>
  );
}
