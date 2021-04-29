module.exports = {
  'hvr-pulse': {
    '25%': {
      '-webkit-transform': 'scale(1.1)',
      transform: 'scale(1.1)',
    },
    '75%': {
      '-webkit-transform': 'scale(0.9)',
      transform: 'scale(0.9)',
    },
  },
  'hvr-pulse-grow': {
    to: {
      '-webkit-transform': 'scale(1.1)',
      transform: 'scale(1.1)',
    },
  },
  'hvr-pulse-shrink': {
    to: {
      '-webkit-transform': 'scale(0.9)',
      transform: 'scale(0.9)',
    },
  },
  'hvr-push': {
    '50%': {
      '-webkit-transform': 'scale(0.8)',
      transform: 'scale(0.8)',
    },
    '100%': {
      '-webkit-transform': 'scale(1)',
      transform: 'scale(1)',
    },
  },
  'hvr-pop': {
    '50%': {
      '-webkit-transform': 'scale(1.2)',
      transform: 'scale(1.2)',
    },
  },
  'hvr-bob': {
    '0%': {
      '-webkit-transform': 'translateY(-8px)',
      transform: 'translateY(-8px)',
    },
    '50%': {
      '-webkit-transform': 'translateY(-4px)',
      transform: 'translateY(-4px)',
    },
    '100%': {
      '-webkit-transform': 'translateY(-8px)',
      transform: 'translateY(-8px)',
    },
  },
  'hvr-bob-float': {
    '100%': {
      '-webkit-transform': 'translateY(-8px)',
      transform: 'translateY(-8px)',
    },
  },
  'hvr-hang': {
    '0%': {
      '-webkit-transform': 'translateY(8px)',
      transform: 'translateY(8px)',
    },
    '50%': {
      '-webkit-transform': 'translateY(4px)',
      transform: 'translateY(4px)',
    },
    '100%': {
      '-webkit-transform': 'translateY(8px)',
      transform: 'translateY(8px)',
    },
  },
  'hvr-hang-sink': {
    '100%': {
      '-webkit-transform': 'translateY(8px)',
      transform: 'translateY(8px)',
    },
  },
  'hvr-buzz-out': {
    '10%': {
      '-webkit-transform': 'translateX(3px) rotate(2deg)',
      transform: 'translateX(3px) rotate(2deg)',
    },
    '20%': {
      '-webkit-transform': 'translateX(-3px) rotate(-2deg)',
      transform: 'translateX(-3px) rotate(-2deg)',
    },
    '30%': {
      '-webkit-transform': 'translateX(3px) rotate(2deg)',
      transform: 'translateX(3px) rotate(2deg)',
    },
    '40%': {
      '-webkit-transform': 'translateX(-3px) rotate(-2deg)',
      transform: 'translateX(-3px) rotate(-2deg)',
    },
    '50%': {
      '-webkit-transform': 'translateX(2px) rotate(1deg)',
      transform: 'translateX(2px) rotate(1deg)',
    },
    '60%': {
      '-webkit-transform': 'translateX(-2px) rotate(-1deg)',
      transform: 'translateX(-2px) rotate(-1deg)',
    },
    '70%': {
      '-webkit-transform': 'translateX(2px) rotate(1deg)',
      transform: 'translateX(2px) rotate(1deg)',
    },
    '80%': {
      '-webkit-transform': 'translateX(-2px) rotate(-1deg)',
      transform: 'translateX(-2px) rotate(-1deg)',
    },
    '90%': {
      '-webkit-transform': 'translateX(1px) rotate(0)',
      transform: 'translateX(1px) rotate(0)',
    },
    '100%': {
      '-webkit-transform': 'translateX(-1px) rotate(0)',
      transform: 'translateX(-1px) rotate(0)',
    },
  },
  'hvr-back-pulse': {
    '50%': {
      'background-color': 'rgba(32, 152, 209, 0.75)',
    },
  },
  'hvr-ripple-out': {
    '100%': {
      top: '-12px',
      right: '-12px',
      bottom: '-12px',
      left: '-12px',
      opacity: '0',
    },
  },
  'hvr-ripple-in': {
    '0%': {
      top: '-12px',
      right: '-12px',
      bottom: '-12px',
      left: '-12px',
      opacity: '0',
    },
    '100%': {
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      opacity: '1',
    },
  },
  'hvr-icon-down': {
    '0%,   50%,   100%': {
      '-webkit-transform': 'translateY(0)',
      transform: 'translateY(0)',
    },
    '25%,   75%': {
      '-webkit-transform': 'translateY(6px)',
      transform: 'translateY(6px)',
    },
  },
  'hvr-icon-up': {
    '0%,   50%,   100%': {
      '-webkit-transform': 'translateY(0)',
      transform: 'translateY(0)',
    },
    '25%,   75%': {
      '-webkit-transform': 'translateY(-6px)',
      transform: 'translateY(-6px)',
    },
  },
  'hvr-icon-drop': {
    '0%': {
      opacity: '0',
    },
    '50%': {
      opacity: '0',
      '-webkit-transform': 'translateY(-100%)',
      transform: 'translateY(-100%)',
    },
    '51%,   100%': {
      opacity: '1',
    },
  },
  'hvr-icon-float-away': {
    '0%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-transform': 'translateY(-1em)',
      transform: 'translateY(-1em)',
    },
  },
  'hvr-icon-sink-away': {
    '0%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-transform': 'translateY(1em)',
      transform: 'translateY(1em)',
    },
  },
  'hvr-icon-pulse': {
    '25%': {
      '-webkit-transform': 'scale(1.05)',
      transform: 'scale(1.05)',
    },
    '75%': {
      '-webkit-transform': 'scale(0.9)',
      transform: 'scale(0.9)',
    },
  },
  'hvr-icon-pulse-grow': {
    to: {
      '-webkit-transform': 'scale(1.3)',
      transform: 'scale(1.3)',
    },
  },
  'hvr-icon-pulse-shrink': {
    to: {
      '-webkit-transform': 'scale(0.8)',
      transform: 'scale(0.8)',
    },
  },
  'hvr-icon-push': {
    '50%': {
      '-webkit-transform': 'scale(0.98)',
      transform: 'scale(0.98)',
    },
  },
  'hvr-icon-pop': {
    '50%': {
      '-webkit-transform': 'scale(1.3)',
      transform: 'scale(1.3)',
    },
  },
  'hvr-icon-bob': {
    '0%': {
      '-webkit-transform': 'translateY(-6px)',
      transform: 'translateY(-6px)',
    },
    '50%': {
      '-webkit-transform': 'translateY(-2px)',
      transform: 'translateY(-2px)',
    },
    '100%': {
      '-webkit-transform': 'translateY(-6px)',
      transform: 'translateY(-6px)',
    },
  },
  'hvr-icon-bob-float': {
    '100%': {
      '-webkit-transform': 'translateY(-6px)',
      transform: 'translateY(-6px)',
    },
  },
  'hvr-icon-hang': {
    '0%': {
      '-webkit-transform': 'translateY(6px)',
      transform: 'translateY(6px)',
    },
    '50%': {
      '-webkit-transform': 'translateY(2px)',
      transform: 'translateY(2px)',
    },
    '100%': {
      '-webkit-transform': 'translateY(6px)',
      transform: 'translateY(6px)',
    },
  },
  'hvr-icon-hang-sink': {
    '100%': {
      '-webkit-transform': 'translateY(6px)',
      transform: 'translateY(6px)',
    },
  },
  'hvr-icon-buzz-out': {
    '10%': {
      '-webkit-transform': 'translateX(3px) rotate(2deg)',
      transform: 'translateX(3px) rotate(2deg)',
    },
    '20%': {
      '-webkit-transform': 'translateX(-3px) rotate(-2deg)',
      transform: 'translateX(-3px) rotate(-2deg)',
    },
    '30%': {
      '-webkit-transform': 'translateX(3px) rotate(2deg)',
      transform: 'translateX(3px) rotate(2deg)',
    },
    '40%': {
      '-webkit-transform': 'translateX(-3px) rotate(-2deg)',
      transform: 'translateX(-3px) rotate(-2deg)',
    },
    '50%': {
      '-webkit-transform': 'translateX(2px) rotate(1deg)',
      transform: 'translateX(2px) rotate(1deg)',
    },
    '60%': {
      '-webkit-transform': 'translateX(-2px) rotate(-1deg)',
      transform: 'translateX(-2px) rotate(-1deg)',
    },
    '70%': {
      '-webkit-transform': 'translateX(2px) rotate(1deg)',
      transform: 'translateX(2px) rotate(1deg)',
    },
    '80%': {
      '-webkit-transform': 'translateX(-2px) rotate(-1deg)',
      transform: 'translateX(-2px) rotate(-1deg)',
    },
    '90%': {
      '-webkit-transform': 'translateX(1px) rotate(0)',
      transform: 'translateX(1px) rotate(0)',
    },
    '100%': {
      '-webkit-transform': 'translateX(-1px) rotate(0)',
      transform: 'translateX(-1px) rotate(0)',
    },
  },
};
