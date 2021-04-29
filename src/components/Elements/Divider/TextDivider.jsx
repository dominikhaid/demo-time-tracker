import React from 'react';
import PropTypes from 'prop-types';

function TextDivider({title, icon, className, style}) {
  TextDivider.propTypes = {
    title: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.object,
  };

  return (
    <p
      style={style}
      className={
        className
          ? className + ' relative font-bold divider'
          : 'relative font-bold divider flex flex-row'
      }
    >
      <style jsx>{`
        .divider {
          display: flex;
          margin: 16px 0;
          font-weight: 500;
          font-size: 16px;
          white-space: nowrap;
          text-align: center;
          border-top: 0;
          border-top-color: currentcolor;
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        .divider:after,
        .divider:before {
          position: relative;
          top: 50%;
          width: 50%;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }
      `}</style>
      {icon && <span className="m-xs">{icon}</span>}
      <span className="m-xs">{title}</span>
    </p>
  );
}

export default TextDivider;
