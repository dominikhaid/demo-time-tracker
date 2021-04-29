import React from 'react';
import PropTypes from 'prop-types';

function DefaultButton({
  id,
  aria,
  onClick,
  type,
  icon,
  title,
  style,
  className,
  disabled,
}) {
  DefaultButton.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    aria: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  if (!className) className = '';
  if (type === 'ghost') className += ' btn-ghost';
  if (type === 'submit') className += 'btn-primary';
  if (type === 'secondary') className += ' btn-secondary';
  if (type === 'primary') className += ' btn-primary';
  if (type === 'outlined') className += ' btn-outlined';
  if (icon) className += ' btn-icon';
  if (icon && /absolute/.test(icon.props.className))
    className += ' svg-absolute';

  return (
    <button
      id={id}
      aria-label={aria}
      onClick={e => onClick(e)}
      style={style}
      className={className}
      disabled={disabled ? disabled : false}
    >
      {icon}
      <p className="inline text-lg">{title}</p>
    </button>
  );
}

export default DefaultButton;
