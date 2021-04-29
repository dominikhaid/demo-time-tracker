module.exports = {
  pulsate: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '50%': {
      '-webkit-transform': 'scale3d(0.8, 0.8, 0.8)',
      transform: 'scale3d(0.8, 0.8, 0.8)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
      'animation-timing-function': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  blink: {
    '0%': {
      opacity: '1',
    },
    '25%': {
      opacity: '0',
    },
    '50%': {
      opacity: '1',
    },
    '75%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
  hitLeft: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      '-webkit-transform': 'translateX(0)',
      transform: 'translateX(0)',
    },
    '40%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'translateX(20px) rotate(4deg)',
      transform: 'translateX(20px) rotate(4deg)',
    },
  },
  hitRight: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      '-webkit-transform': 'translateX(0)',
      transform: 'translateX(0)',
    },
    '40%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'translateX(-20px) rotate(-4deg)',
      transform: 'translateX(-20px) rotate(-4deg)',
    },
  },
  shake: {
    '10%': {
      '-webkit-transform': 'translateX(-10px)',
      transform: 'translateX(-10px)',
    },
    '20%': {
      '-webkit-transform': 'translateX(10px)',
      transform: 'translateX(10px)',
    },
    '30%': {
      '-webkit-transform': 'translateX(-10px)',
      transform: 'translateX(-10px)',
    },
    '40%': {
      '-webkit-transform': 'translateX(10px)',
      transform: 'translateX(10px)',
    },
    '50%': {
      '-webkit-transform': 'translateX(-10px)',
      transform: 'translateX(-10px)',
    },
    '60%': {
      '-webkit-transform': 'translateX(10px)',
      transform: 'translateX(10px)',
    },
    '70%': {
      '-webkit-transform': 'translateX(-10px)',
      transform: 'translateX(-10px)',
    },
    '80%': {
      '-webkit-transform': 'translateX(10px)',
      transform: 'translateX(10px)',
    },
    '90%': {
      '-webkit-transform': 'translateX(-10px)',
      transform: 'translateX(-10px)',
    },
  },
  ball: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'animation-timing-function': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '20%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      '-webkit-transform': 'translate3d(0, -100px, 0)',
      transform: 'translate3d(0, -100px, 0)',
    },
    '40%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      '-webkit-transform': 'translate3d(0, -30px, 0)',
      transform: 'translate3d(0, -30px, 0)',
    },
    '75%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '85%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 1, 1)',
      '-webkit-transform': 'translate3d(0, -15px, 0)',
      transform: 'translate3d(0, -15px, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
  },
  pullUp: {
    '0%': {
      '-webkit-transform': 'scale3d(0, 0, 0)',
      transform: 'scale3d(0, 0, 0)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scale3d(1, 0, 1)',
      transform: 'scale3d(1, 0, 1)',
      '-webkit-transform-origin': 'center bottom',
      'transform-origin': 'center bottom',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  pullDown: {
    '0%': {
      '-webkit-transform': 'scale3d(0, 0, 0)',
      transform: 'scale3d(0, 0, 0)',
    },
    '50%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scale3d(1, 0, 1)',
      transform: 'scale3d(1, 0, 1)',
      '-webkit-transform-origin': 'center top',
      'transform-origin': 'center top',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  pullLeft: {
    '0%': {
      '-webkit-transform': 'scale3d(0, 1, 1)',
      transform: 'scale3d(0, 1, 1)',
    },
    '50%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scale3d(0, 1, 1)',
      transform: 'scale3d(0, 1, 1)',
      '-webkit-transform-origin': 'center left',
      'transform-origin': 'center left',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  pullRight: {
    '0%': {
      '-webkit-transform': 'scale3d(0, 1, 1)',
      transform: 'scale3d(0, 1, 1)',
    },
    '50%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scale3d(0, 1, 1)',
      transform: 'scale3d(0, 1, 1)',
      '-webkit-transform-origin': 'center right',
      'transform-origin': 'center right',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  jumpInLeft: {
    '0%': {
      opacity: '0',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) rotate(-90deg)',
      transform: 'scale3d(0.5, 0.5, 0.5) rotate(-90deg)',
    },
    '50%': {
      opacity: '1',
      '-webkit-transform': 'scale3d(1.2, 1.2, 1.2) rotate(10deg)',
      transform: 'scale3d(1.2, 1.2, 1.2) rotate(10deg)',
    },
    '70%': {
      '-webkit-transform': 'scale3d(0.9, 0.9, 0.9) rotate(-5deg)',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate(-5deg)',
    },
    '90%': {
      '-webkit-transform': 'scale3d(1, 1, 1) rotate(0deg)',
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    },
  },
  jumpInRight: {
    '0%': {
      opacity: '0',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) rotate(90deg)',
      transform: 'scale3d(0.5, 0.5, 0.5) rotate(90deg)',
    },
    '50%': {
      opacity: '1',
      '-webkit-transform': 'scale3d(1.2, 1.2, 1.2) rotate(-10deg)',
      transform: 'scale3d(1.2, 1.2, 1.2) rotate(-10deg)',
    },
    '70%': {
      '-webkit-transform': 'scale3d(0.9, 0.9, 0.9) rotate(5deg)',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate(5deg)',
    },
    '90%': {
      '-webkit-transform': 'scale3d(1, 1, 1) rotate(0deg)',
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    },
  },
  jumpOutRight: {
    '0%': {
      '-webkit-transform': 'scale3d(1, 1, 1) rotate(0deg)',
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    },
    '30%': {
      '-webkit-transform': 'scale3d(0.9, 0.9, 0.9) rotate(5deg)',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate(5deg)',
    },
    '70%': {
      opacity: '1',
      '-webkit-transform': 'scale3d(1.2, 1.2, 1.2) rotate(-10deg)',
      transform: 'scale3d(1.2, 1.2, 1.2) rotate(-10deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) rotate(90deg)',
      transform: 'scale3d(0.5, 0.5, 0.5) rotate(90deg)',
    },
  },
  jumpOutLeft: {
    '0%': {
      '-webkit-transform': 'scale3d(1, 1, 1) rotate(0deg)',
      transform: 'scale3d(1, 1, 1) rotate(0deg)',
    },
    '30%': {
      '-webkit-transform': 'scale3d(0.9, 0.9, 0.9) rotate(-5deg)',
      transform: 'scale3d(0.9, 0.9, 0.9) rotate(-5deg)',
    },
    '70%': {
      opacity: '1',
      '-webkit-transform': 'scale3d(1.2, 1.2, 1.2) rotate(10deg)',
      transform: 'scale3d(1.2, 1.2, 1.2) rotate(10deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) rotate(-90deg)',
      transform: 'scale3d(0.5, 0.5, 0.5) rotate(-90deg)',
    },
  },
  rollInLeft: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateX(-400px) rotate(445deg)',
      transform: 'translateX(-400px) rotate(445deg)',
      opacity: '0',
    },
    '30%': {
      opacity: '1',
    },
    '50%': {
      '-webkit-transform': 'translateX(20px) rotate(20deg)',
      transform: 'translateX(20px) rotate(20deg)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateX(0) rotate(0deg)',
      transform: 'translateX(0) rotate(0deg)',
    },
  },
  rollInRight: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateX(400px) rotate(-445deg)',
      transform: 'translateX(400px) rotate(-445deg)',
      opacity: '0',
    },
    '30%': {
      opacity: '1',
    },
    '50%': {
      '-webkit-transform': 'translateX(-20px) rotate(-20deg)',
      transform: 'translateX(-20px) rotate(-20deg)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateX(0) rotate(0deg)',
      transform: 'translateX(0) rotate(0deg)',
    },
  },
  rollInTop: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateY(-400px) rotate(-445deg)',
      transform: 'translateY(-400px) rotate(-445deg)',
      opacity: '0',
    },
    '30%': {
      opacity: '1',
    },
    '50%': {
      '-webkit-transform': 'translateY(20px) rotate(-20deg)',
      transform: 'translateY(20px) rotate(-20deg)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateY(0) rotate(0deg)',
      transform: 'translateY(0) rotate(0deg)',
    },
  },
  rollInBottom: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateY(400px) rotate(-445deg)',
      transform: 'translateY(400px) rotate(-445deg)',
      opacity: '0',
    },
    '30%': {
      opacity: '1',
    },
    '50%': {
      '-webkit-transform': 'translateY(-20px) rotate(-20deg)',
      transform: 'translateY(-20px) rotate(-20deg)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateY(0) rotate(0deg)',
      transform: 'translateY(0) rotate(0deg)',
    },
  },
  rollOutLeft: {
    '0%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateX(0) rotate(0deg)',
      transform: 'translateX(0) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'translateX(20px) rotate(-20deg)',
      transform: 'translateX(20px) rotate(-20deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateX(-400px) rotate(-445deg)',
      transform: 'translateX(-400px) rotate(-445deg)',
    },
  },
  rollOutRight: {
    '0%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateX(0) rotate(0deg)',
      transform: 'translateX(0) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'translateX(-20px) rotate(20deg)',
      transform: 'translateX(-20px) rotate(20deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateX(400px) rotate(445deg)',
      transform: 'translateX(400px) rotate(445deg)',
    },
  },
  rollOutTop: {
    '0%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateY(0) rotate(0deg)',
      transform: 'translateY(0) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'translateY(20px) rotate(20deg)',
      transform: 'translateY(20px) rotate(20deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateY(-400px) rotate(445deg)',
      transform: 'translateY(-400px) rotate(445deg)',
    },
  },
  rollOutBottom: {
    '0%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'translateY(0) rotate(0deg)',
      transform: 'translateY(0) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'translateY(-20px) rotate(-20deg)',
      transform: 'translateY(-20px) rotate(-20deg)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translateY(400px) rotate(-445deg)',
      transform: 'translateY(400px) rotate(-445deg)',
    },
  },
  popIn: {
    '0%': {
      '-webkit-transform': 'scale3d(0, 0, 0)',
      transform: 'scale3d(0, 0, 0)',
      opacity: '0',
    },
    '20%': {
      opacity: '1',
    },
    '40%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08)',
      transform: 'scale3d(1.08, 1.08, 1.08)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '80%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.03, 1.03, 1.03)',
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  popInLeft: {
    '0%': {
      opacity: '0',
      '-webkit-transform': 'translate3d(-200px, 0, 0) scale3d(0.1, 0.1, 0.1)',
      transform: 'translate3d(-200px, 0, 0) scale3d(0.1, 0.1, 0.1)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
      transform: 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '80%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.03, 1.03, 1.03)',
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  popInRight: {
    '0%': {
      '-webkit-transform': 'translate3d(200px, 0, 0) scale3d(0.1, 0.1, 0.1)',
      transform: 'translate3d(200px, 0, 0) scale3d(0.1, 0.1, 0.1)',
      opacity: '0',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
      transform: 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '80%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.03, 1.03, 1.03)',
      transform: 'scale3d(1.03, 1.03, 1.03)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
  popInTop: {
    '0%': {
      '-webkit-transform': 'translate3d(0, -200px, 0) scale3d(0.1, 0.1, 0.1)',
      transform: 'translate3d(0, -200px, 0) scale3d(0.1, 0.1, 0.1)',
      opacity: '0',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
      transform: 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
    '80%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03)',
      transform: 'translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
  },
  popInBottom: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1)',
      transform: 'translate3d(0, 200px, 0) scale3d(0.1, 0.1, 0.1)',
      opacity: '0',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
      transform: 'translate3d(0, 0, 0) scale3d(1.08, 1.08, 1.08)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
    '80%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03)',
      transform: 'translate3d(0, 0, 0) scale3d(1.03, 1.03, 1.03)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
  },
  popOut: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08)',
      transform: 'scale3d(1.08, 1.08, 1.08)',
    },
    '80%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(0.3, 0.3, 0.3)',
      transform: 'scale3d(0.3, 0.3, 0.3)',
    },
  },
  popOutLeft: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      '-webkit-transform-origin': 'left center',
      'transform-origin': 'left center',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
      transform: 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) translate3d(-200px, 0, 0)',
      transform: 'scale3d(0.5, 0.5, 0.5) translate3d(-200px, 0, 0)',
    },
  },
  popOutRight: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      '-webkit-transform-origin': 'right center',
      'transform-origin': 'right center',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
      transform: 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) translate3d(200px, 0, 0)',
      transform: 'scale3d(0.5, 0.5, 0.5) translate3d(200px, 0, 0)',
    },
  },
  popOutTop: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      '-webkit-transform-origin': 'top center',
      'transform-origin': 'top center',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
      transform: 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) translate3d(0, -400px, 0)',
      transform: 'scale3d(0.5, 0.5, 0.5) translate3d(0, -400px, 0)',
    },
  },
  popOutBottom: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)',
      '-webkit-transform-origin': 'bottom center',
      'transform-origin': 'bottom center',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
      transform: 'scale3d(1.08, 1.08, 1.08) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'scale3d(0.5, 0.5, 0.5) translate3d(0, 400px, 0)',
      transform: 'scale3d(0.5, 0.5, 0.5) translate3d(0, 400px, 0)',
    },
  },
  flip: {
    from: {
      '-webkit-transform':
        'perspective(400px) rotateY(-360deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(-360deg) scale3d(1, 1, 1)',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    '50%': {
      '-webkit-transform':
        'perspective(400px) rotateY(-180deg) scale3d(1.2, 1.2, 1.2)',
      transform: 'perspective(400px) rotateY(-180deg) scale3d(1.2, 1.2, 1.2)',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    to: {
      '-webkit-transform': 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'animation-timing-function': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    },
  },
  flipInX: {
    from: {
      opacity: '0',
      '-webkit-transform':
        'perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2)',
      transform: 'perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2)',
    },
    '50%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform':
        'perspective(400px) rotateX(-20deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateX(-20deg) scale3d(1, 1, 1)',
    },
    to: {
      '-webkit-transform': 'perspective(400px) rotateX(0deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateX(0deg) scale3d(1, 1, 1)',
    },
  },
  flipInY: {
    from: {
      opacity: '0',
      '-webkit-transform':
        'perspective(400px) rotateY(90deg) scale3d(1.2, 1.2, 1.2)',
      transform: 'perspective(400px) rotateY(90deg) scale3d(1.2, 1.2, 1.2)',
    },
    '50%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform':
        'perspective(400px) rotateY(-20deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(-20deg) scale3d(1, 1, 1)',
    },
    to: {
      '-webkit-transform': 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
    },
  },
  flipOutX: {
    from: {
      '-webkit-transform': 'perspective(400px) rotateX(0deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateX(0deg) scale3d(1, 1, 1)',
    },
    '60%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform':
        'perspective(400px) rotateX(-30deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateX(-30deg) scale3d(1, 1, 1)',
    },
    to: {
      opacity: '0',
      '-webkit-transform':
        'perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2)',
      transform: 'perspective(400px) rotateX(90deg) scale3d(1.2, 1.2, 1.2)',
    },
  },
  flipOutY: {
    from: {
      '-webkit-transform': 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(0deg) scale3d(1, 1, 1)',
    },
    '60%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform':
        'perspective(400px) rotateY(-30deg) scale3d(1, 1, 1)',
      transform: 'perspective(400px) rotateY(-30deg) scale3d(1, 1, 1)',
    },
    to: {
      opacity: '0',
      '-webkit-transform':
        'perspective(400px) rotateY(90deg) scale3d(1.2, 1.2, 1.2)',
      transform: 'perspective(400px) rotateY(90deg) scale3d(1.2, 1.2, 1.2)',
    },
  },
  fadeIn: {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
  fadeInRight: {
    '0%': {
      '-webkit-transform': 'translate3d(400px, 0, 0)',
      transform: 'translate3d(400px, 0, 0)',
      opacity: '0',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
  },
  fadeInLeft: {
    '0%': {
      '-webkit-transform': 'translate3d(-400px, 0, 0)',
      transform: 'translate3d(-400px, 0, 0)',
      opacity: '0',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
  },
  fadeInTop: {
    '0%': {
      '-webkit-transform': 'translate3d(0, -400px, 0)',
      transform: 'translate3d(0, -400px, 0)',
      opacity: '0',
    },
    '50%': {
      opacity: '0.2',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
  },
  fadeInBottom: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 400px, 0)',
      transform: 'translate3d(0, 400px, 0)',
      opacity: '0',
    },
    '50%': {
      opacity: '0.2',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
  },
  fadeOut: {
    '0%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
    },
  },
  fadeOutLeft: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
    '100%': {
      '-webkit-transform': 'translate3d(-400px, 0, 0)',
      transform: 'translate3d(-400px, 0, 0)',
      opacity: '0',
    },
  },
  fadeOutRight: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
    '100%': {
      '-webkit-transform': 'translate3d(400px, 0, 0)',
      transform: 'translate3d(400px, 0, 0)',
      opacity: '0',
    },
  },
  fadeOutTop: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
    '40%': {
      opacity: '0.2',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, -300px, 0)',
      transform: 'translate3d(0, -300px, 0)',
      opacity: '0',
    },
  },
  fadeOutBottom: {
    '0%': {
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      opacity: '1',
    },
    '40%': {
      opacity: '0.2',
    },
    '100%': {
      '-webkit-transform': 'translate3d(0, 300px, 0)',
      transform: 'translate3d(0, 300px, 0)',
      opacity: '0',
    },
  },
  driveInLeft: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(-400px, 0, 0)',
      transform: 'translate3d(-400px, 0, 0)',
    },
    '30%': {
      opacity: '1',
    },
    '60%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(30px, 0, 0)',
      transform: 'translate3d(30px, 0, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
  },
  driveInRight: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(400px, 0, 0)',
      transform: 'translate3d(400px, 0, 0)',
    },
    '30%': {
      opacity: '1',
    },
    '60%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(-30px, 0, 0)',
      transform: 'translate3d(-30px, 0, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
  },
  driveInTop: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, -400px, 0)',
      transform: 'translate3d(0, -400px, 0)',
    },
    '30%': {
      opacity: '1',
    },
    '60%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(0, 30px, 0)',
      transform: 'translate3d(0, 30px, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
  },
  driveInBottom: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 300px, 0)',
      transform: 'translate3d(0, 300px, 0)',
    },
    '30%': {
      opacity: '1',
    },
    '60%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(0, -30px, 0)',
      transform: 'translate3d(0, -30px, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.645, 0.045, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
  },
  driveOutLeft: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(30px, 0, 0)',
      transform: 'translate3d(30px, 0, 0)',
    },
    '60%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(-400px, 0, 0)',
      transform: 'translate3d(-400px, 0, 0)',
    },
  },
  driveOutRight: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(-30px, 0, 0)',
      transform: 'translate3d(-30px, 0, 0)',
    },
    '60%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(400px, 0, 0)',
      transform: 'translate3d(400px, 0, 0)',
    },
  },
  driveOutTop: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(0, 30px, 0)',
      transform: 'translate3d(0, 30px, 0)',
    },
    '60%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, -400px, 0)',
      transform: 'translate3d(0, -400px, 0)',
    },
  },
  driveOutBottom: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      '-webkit-transform': 'translate3d(0, -30px, 0)',
      transform: 'translate3d(0, -30px, 0)',
    },
    '60%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'translate3d(0, 300px, 0)',
      transform: 'translate3d(0, 300px, 0)',
    },
  },
  spin: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
      '-webkit-transform': 'rotateZ(0deg)',
      transform: 'rotateZ(0deg)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '20%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'rotateZ(-20deg)',
      transform: 'rotateZ(-20deg)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '70%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'rotateZ(380deg)',
      transform: 'rotateZ(380deg)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'rotateZ(360deg)',
      transform: 'rotateZ(360deg)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
  },
  spinIn: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      '-webkit-transform': 'rotateZ(0deg) scale3d(0, 0, 0)',
      transform: 'rotateZ(0deg) scale3d(0, 0, 0)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '50%': {
      opacity: '1',
    },
    '70%': {
      '-webkit-transform': 'rotateZ(380deg) scale3d(1, 1, 1)',
      transform: 'rotateZ(380deg) scale3d(1, 1, 1)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '100%': {
      '-webkit-transform': 'rotateZ(360deg) scale3d(1, 1, 1)',
      transform: 'rotateZ(360deg) scale3d(1, 1, 1)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
  },
  spinOut: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      'animation-timing-function': 'cubic-bezier(0.23, 1, 0.32, 1)',
      '-webkit-transform': 'rotateZ(0deg) scale3d(1, 1, 1)',
      transform: 'rotateZ(0deg) scale3d(1, 1, 1)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '20%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      'animation-timing-function': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      '-webkit-transform': 'rotateZ(-20deg) scale3d(1, 1, 1)',
      transform: 'rotateZ(-20deg) scale3d(1, 1, 1)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
    '30%': {
      opacity: '1',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.47, 0, 0.745, 0.715)',
      'animation-timing-function': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
      '-webkit-transform': 'rotateZ(360deg) scale3d(0, 0, 0)',
      transform: 'rotateZ(360deg) scale3d(0, 0, 0)',
      '-webkit-transform-origin': 'center center',
      'transform-origin': 'center center',
    },
  },
  swoopInLeft: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleX(1.5) translate3d(-400px, 0, 0)',
      transform: 'scaleX(1.5) translate3d(-400px, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1.2) translate3d(0, 0, 0)',
      transform: 'scaleX(1.2) translate3d(0, 0, 0)',
    },
    '65%': {
      '-webkit-transform': 'scaleX(1) translate3d(20px, 0, 0)',
      transform: 'scaleX(1) translate3d(20px, 0, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1) translate3d(0, 0, 0)',
      transform: 'scaleX(1) translate3d(0, 0, 0)',
    },
  },
  swoopInRight: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleX(1.5) translate3d(400px, 0, 0)',
      transform: 'scaleX(1.5) translate3d(400px, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1.2) translate3d(0, 0, 0)',
      transform: 'scaleX(1.2) translate3d(0, 0, 0)',
    },
    '65%': {
      '-webkit-transform': 'scaleX(1) translate3d(-20px, 0, 0)',
      transform: 'scaleX(1) translate3d(-20px, 0, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1) translate3d(0, 0, 0)',
      transform: 'scaleX(1) translate3d(0, 0, 0)',
    },
  },
  swoopInTop: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleY(1.5) translate3d(0, -400px, 0)',
      transform: 'scaleY(1.5) translate3d(0, -400px, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1.2) translate3d(0, 0, 0)',
      transform: 'scaleY(1.2) translate3d(0, 0, 0)',
    },
    '65%': {
      '-webkit-transform': 'scaleY(1) translate3d(0, 20px, 0)',
      transform: 'scaleY(1) translate3d(0, 20px, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1) translate3d(0, 0, 0)',
      transform: 'scaleY(1) translate3d(0, 0, 0)',
    },
  },
  swoopInBottom: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleY(1.5) translate3d(0, 250px, 0)',
      transform: 'scaleY(1.5) translate3d(0, 250px, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1.2) translate3d(0, 0, 0)',
      transform: 'scaleY(1.2) translate3d(0, 0, 0)',
    },
    '65%': {
      '-webkit-transform': 'scaleY(1) translate3d(0, -20px, 0)',
      transform: 'scaleY(1) translate3d(0, -20px, 0)',
    },
    '100%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1) translate3d(0, 0, 0)',
      transform: 'scaleY(1) translate3d(0, 0, 0)',
    },
  },
  swoopOutLeft: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1) translate3d(0, 0, 0)',
      transform: 'scaleX(1) translate3d(0, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'scaleX(1) translate3d(20px, 0, 0)',
      transform: 'scaleX(1) translate3d(20px, 0, 0)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1.2) translate3d(0, 0, 0)',
      transform: 'scaleX(1.2) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleX(1.5) translate3d(-400px, 0, 0)',
      transform: 'scaleX(1.5) translate3d(-400px, 0, 0)',
    },
  },
  swoopOutRight: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1) translate3d(0, 0, 0)',
      transform: 'scaleX(1) translate3d(0, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'scaleX(1) translate3d(-20px, 0, 0)',
      transform: 'scaleX(1) translate3d(-20px, 0, 0)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleX(1.2) translate3d(0, 0, 0)',
      transform: 'scaleX(1.2) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleX(1.5) translate3d(400px, 0, 0)',
      transform: 'scaleX(1.5) translate3d(400px, 0, 0)',
    },
  },
  swoopOutTop: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1) translate3d(0, 0, 0)',
      transform: 'scaleY(1) translate3d(0, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'scaleY(1) translate3d(0, 20px, 0)',
      transform: 'scaleY(1) translate3d(0, 20px, 0)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1.2) translate3d(0, 0, 0)',
      transform: 'scaleY(1.2) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleY(1.5) translate3d(0, -400px, 0)',
      transform: 'scaleY(1.5) translate3d(0, -400px, 0)',
    },
  },
  swoopOutBottom: {
    '0%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1) translate3d(0, 0, 0)',
      transform: 'scaleY(1) translate3d(0, 0, 0)',
    },
    '40%': {
      opacity: '1',
      '-webkit-transform': 'scaleY(1) translate3d(0, -20px, 0)',
      transform: 'scaleY(1) translate3d(0, -20px, 0)',
    },
    '60%': {
      '-webkit-animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      'animation-timing-function': 'cubic-bezier(0.42, 0, 0.58, 1)',
      '-webkit-transform': 'scaleY(1.2) translate3d(0, 0, 0)',
      transform: 'scaleY(1.2) translate3d(0, 0, 0)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.215, 0.61, 0.355, 1)',
      'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      '-webkit-transform': 'scaleY(1.5) translate3d(0, 200px, 0)',
      transform: 'scaleY(1.5) translate3d(0, 200px, 0)',
    },
  },
  fold: {
    '0%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
    '30%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'scale3d(1, 0.4, 1)',
      transform: 'scale3d(1, 0.4, 1)',
    },
    '60%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'scale3d(0.4, 0.4, 1)',
      transform: 'scale3d(0.4, 0.4, 1)',
    },
    '100%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      '-webkit-transform': 'scale3d(0.2, 0.2, 0.2)',
      transform: 'scale3d(0.2, 0.2, 0.2)',
    },
  },
  unfold: {
    '0%': {
      opacity: '0',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      'animation-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      '-webkit-transform': 'scale3d(0, 0, 0)',
      transform: 'scale3d(0, 0, 0)',
    },
    '30%': {
      opacity: '1',
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'scale3d(0.4, 0.4, 1)',
      transform: 'scale3d(0.4, 0.4, 1)',
    },
    '60%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      'animation-timing-function': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      '-webkit-transform': 'scale3d(0.4, 1, 1)',
      transform: 'scale3d(0.4, 1, 1)',
    },
    '100%': {
      '-webkit-animation-timing-function':
        'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      'animation-timing-function': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      '-webkit-transform': 'scale3d(1, 1, 1)',
      transform: 'scale3d(1, 1, 1)',
    },
  },
};
