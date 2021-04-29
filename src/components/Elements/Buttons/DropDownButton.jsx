import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';

function DropDownButton({type, icon, title, style, className, children}) {
  DropDownButton.propTypes = {
    title: PropTypes.object,
    children: PropTypes.object,
    style: PropTypes.object,
    type: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
  };

  const [active, setActive] = useState(false);

  if (type === 'ghost') className += ' btn-ghost';
  if (type === 'submit') className += ' btn-primary';
  if (type === 'secondary') className += ' btn-secondary';
  if (type === 'primary') className += ' btn-primary';
  if (type === 'outlined') className += ' btn-outlined';
  if (icon) className = className ? className + ' btn-icon' : 'btn-icon';
  if (icon && /absolute/.test(icon.props.className))
    className = className
      ? className + ' btn-icon svg-absolute'
      : 'btn-icon svg-absolute';
  return (
    <div>
      <button
        onClick={e => setActive(!active)}
        style={style}
        className={className + ''}
      >
        {icon}
        {title}
      </button>
      {active && (
        <div
          style={{maxWidth: '320px', marginTop: '1rem', left: '0'}}
          className="relative z-20 bg-white rounded-lg shadow-container p-xl"
        >
          {children}
          <div className="place-content-center spaced">
            <DefaultButton
              title="close"
              className="small mt-lg"
              onClick={e => setActive(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownButton;
