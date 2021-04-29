import React from 'react';
import PropTypes from 'prop-types';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';

export default function RenderLogin({children, title, icon, style, className}) {
  RenderLogin.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.func,
  };

  return (
    <div
      style={style}
      className={
        className
          ? className + ' prose m-auto border-2 bg-white p-4xl'
          : 'prose m-auto border-2 bg-white p-4xl'
      }
    >
      <style jsx>{`
        span {
          height: 250px;
          max-width: 250px;
        }
        @media (max-width: 765px) {
          span {
            height: 150px;
            max-width: 150px !important;
          }
        }
      `}</style>
      <DefaultH1 title={title} className="text-center" />
      {icon && <span className="block m-auto p-xs">{icon}</span>}
      <div className="text-center">{children}</div>
    </div>
  );
}
