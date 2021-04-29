module.exports = {
  puffIn: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(2, 2)',
      '-webkit-filter': 'blur(2px)',
      filter: 'blur(2px)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
  },
  puffOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(2, 2)',
      '-webkit-filter': 'blur(2px)',
      filter: 'blur(2px)',
    },
  },
  vanishIn: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(2, 2)',
      '-webkit-filter': 'blur(90px)',
      filter: 'blur(90px)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
  },
  vanishOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(2, 2)',
      '-webkit-filter': 'blur(20px)',
      filter: 'blur(20px)',
    },
  },
  boingInUp: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 0%',
      transform: 'perspective(800px) rotateX(-90deg)',
    },
    '50%': {
      opacity: '1',
      'transform-origin': '50% 0%',
      transform: 'perspective(800px) rotateX(50deg)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 0%',
      transform: 'perspective(800px) rotateX(0deg)',
    },
  },
  boingOutDown: {
    '0%': {
      opacity: '1',
      'transform-origin': '100% 100%',
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
    },
    '20%': {
      opacity: '1',
      'transform-origin': '100% 100%',
      transform: 'perspective(800px) rotateX(0deg) rotateY(10deg)',
    },
    '30%': {
      opacity: '1',
      'transform-origin': '0% 100%',
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
    },
    '40%': {
      opacity: '1',
      'transform-origin': '0% 100%',
      transform: 'perspective(800px) rotateX(10deg) rotateY(10deg)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '100% 100%',
      transform: 'perspective(800px) rotateX(90deg) rotateY(0deg)',
    },
  },
  bombLeftOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'rotate(0deg)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '50%': {
      opacity: '1',
      'transform-origin': '-100% 50%',
      transform: 'rotate(-160deg)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '-100% 50%',
      transform: 'rotate(-160deg)',
      '-webkit-filter': 'blur(20px)',
      filter: 'blur(20px)',
    },
  },
  bombRightOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'rotate(0deg)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '50%': {
      opacity: '1',
      'transform-origin': '200% 50%',
      transform: 'rotate(160deg)',
      '-webkit-filter': 'blur(0px)',
      filter: 'blur(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '200% 50%',
      transform: 'rotate(160deg)',
      '-webkit-filter': 'blur(20px)',
      filter: 'blur(20px)',
    },
  },
  magic: {
    '0%': {
      opacity: '1',
      'transform-origin': '100% 200%',
      transform: 'scale(1, 1) rotate(0deg)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '200% 500%',
      transform: 'scale(0, 0) rotate(270deg)',
    },
  },
  swap: {
    '0%': {
      opacity: '0',
      'transform-origin': '0 100%',
      transform: 'scale(0, 0) translate(-700px, 0px)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '100% 100%',
      transform: 'scale(1, 1) translate(0px, 0px)',
    },
  },
  twisterInDown: {
    '0%': {
      opacity: '0',
      'transform-origin': '0 100%',
      transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
    },
    '30%': {
      'transform-origin': '0 100%',
      transform: 'scale(0, 0) rotate(360deg) translateY(-100%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '100% 100%',
      transform: 'scale(1, 1) rotate(0deg) translateY(0%)',
    },
  },
  twisterInUp: {
    '0%': {
      opacity: '0',
      'transform-origin': '100% 0',
      transform: 'scale(0, 0) rotate(360deg) translateY(100%)',
    },
    '30%': {
      'transform-origin': '100% 0',
      transform: 'scale(0, 0) rotate(360deg) translateY(100%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '0 0',
      transform: 'scale(1, 1) rotate(0deg) translateY(0)',
    },
  },
  foolishIn: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(0, 0) rotate(360deg)',
    },
    '20%': {
      opacity: '1',
      'transform-origin': '0% 100%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      'transform-origin': '100% 100%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '60%': {
      opacity: '1',
      'transform-origin': '0%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '80%': {
      opacity: '1',
      'transform-origin': '0% 0%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1) rotate(0deg)',
    },
  },
  foolishOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1) rotate(360deg)',
    },
    '20%': {
      opacity: '1',
      'transform-origin': '0% 0%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '40%': {
      opacity: '1',
      'transform-origin': '100% 0%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '60%': {
      opacity: '1',
      'transform-origin': '0%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '80%': {
      opacity: '1',
      'transform-origin': '0% 100%',
      transform: 'scale(0.5, 0.5) rotate(0deg)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(0, 0) rotate(0deg)',
    },
  },
  holeOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1) rotateY(0deg)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(0, 0) rotateY(180deg)',
    },
  },
  swashIn: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(0, 0)',
    },
    '90%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(0.9, 0.9)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
    },
  },
  swashOut: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(1, 1)',
    },
    '80%': {
      opacity: '1',
      'transform-origin': '50% 50%',
      transform: 'scale(0.9, 0.9)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 50%',
      transform: 'scale(0, 0)',
    },
  },
  spaceInDown: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 100%',
      transform: 'scale(0.2) translate(0%, 200%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 100%',
      transform: 'scale(1) translate(0%, 0%)',
    },
  },
  spaceInLeft: {
    '0%': {
      opacity: '0',
      'transform-origin': '0% 50%',
      transform: 'scale(0.2) translate(-200%, 0%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '0% 50%',
      transform: 'scale(1) translate(0%, 0%)',
    },
  },
  spaceInRight: {
    '0%': {
      opacity: '0',
      'transform-origin': '100% 50%',
      transform: 'scale(0.2) translate(200%, 0%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '100% 50%',
      transform: 'scale(1) translate(0%, 0%)',
    },
  },
  spaceInUp: {
    '0%': {
      opacity: '0',
      'transform-origin': '50% 0%',
      transform: 'scale(0.2) translate(0%, -200%)',
    },
    '100%': {
      opacity: '1',
      'transform-origin': '50% 0%',
      transform: 'scale(1) translate(0%, 0%)',
    },
  },
  spaceOutDown: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 100%',
      transform: 'scale(1) translate(0%, 0%)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 100%',
      transform: 'scale(0.2) translate(0%, 200%)',
    },
  },
  spaceOutLeft: {
    '0%': {
      opacity: '1',
      'transform-origin': '0% 50%',
      transform: 'scale(1) translate(0%, 0%)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '0% 50%',
      transform: 'scale(0.2) translate(-200%, 0%)',
    },
  },
  spaceOutRight: {
    '0%': {
      opacity: '1',
      'transform-origin': '100% 50%',
      transform: 'scale(1) translate(0%, 0%)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '100% 50%',
      transform: 'scale(0.2) translate(200%, 0%)',
    },
  },
  spaceOutUp: {
    '0%': {
      opacity: '1',
      'transform-origin': '50% 0%',
      transform: 'scale(1) translate(0%, 0%)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 0%',
      transform: 'scale(0.2) translate(0%, -200%)',
    },
  },
  perspectiveDown: {
    '0%': {
      'transform-origin': '0 100%',
      transform: 'perspective(800px) rotateX(0deg)',
    },
    '100%': {
      'transform-origin': '0 100%',
      transform: 'perspective(800px) rotateX(-180deg)',
    },
  },
  perspectiveDownReturn: {
    '0%': {
      'transform-origin': '0 100%',
      transform: 'perspective(800px) rotateX(-180deg)',
    },
    '100%': {
      'transform-origin': '0 100%',
      transform: 'perspective(800px) rotateX(0deg)',
    },
  },
  perspectiveLeft: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(0deg)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(-180deg)',
    },
  },
  perspectiveLeftReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(-180deg)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(0deg)',
    },
  },
  perspectiveRight: {
    '0%': {
      'transform-origin': '100% 0',
      transform: 'perspective(800px) rotateY(0deg)',
    },
    '100%': {
      'transform-origin': '100% 0',
      transform: 'perspective(800px) rotateY(180deg)',
    },
  },
  perspectiveRightReturn: {
    '0%': {
      'transform-origin': '100% 0',
      transform: 'perspective(800px) rotateY(180deg)',
    },
    '100%': {
      'transform-origin': '100% 0',
      transform: 'perspective(800px) rotateY(0deg)',
    },
  },
  perspectiveUp: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(0deg)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(180deg)',
    },
  },
  perspectiveUpReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(180deg)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(0deg)',
    },
  },
  rotateDown: {
    '0%': {
      opacity: '1',
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(0deg) translateZ(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 100%',
      transform: 'perspective(800px) rotateX(-180deg) translateZ(300px)',
    },
  },
  rotateLeft: {
    '0%': {
      opacity: '1',
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(0deg) translateZ(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 0',
      transform: 'perspective(800px) rotateY(-180deg) translateZ(300px)',
    },
  },
  rotateRight: {
    '0%': {
      opacity: '1',
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateY(0deg) translate3d(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 0',
      transform: 'perspective(800px) rotateY(180deg) translateZ(150px)',
    },
  },
  rotateUp: {
    '0%': {
      opacity: '1',
      'transform-origin': '0 0',
      transform: 'perspective(800px) rotateX(0deg) translateZ(0px)',
    },
    '100%': {
      opacity: '0',
      'transform-origin': '50% 0',
      transform: 'perspective(800px) rotateX(180deg) translateZ(100px)',
    },
  },
  slideDown: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateY(0%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateY(100%)',
    },
  },
  slideDownReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateY(100%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateY(0%)',
    },
  },
  slideLeft: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateX(0%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateX(-100%)',
    },
  },
  slideLeftReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateX(-100%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateX(0%)',
    },
  },
  slideRight: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateX(0%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateX(100%)',
    },
  },
  slideRightReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateX(100%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateX(0%)',
    },
  },
  slideUp: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateY(0%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateY(-100%)',
    },
  },
  slideUpReturn: {
    '0%': {
      'transform-origin': '0 0',
      transform: 'translateY(-100%)',
    },
    '100%': {
      'transform-origin': '0 0',
      transform: 'translateY(0%)',
    },
  },
  openDownLeft: {
    '0%': {
      'transform-origin': 'bottom left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      'transform-origin': 'bottom left',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openDownLeftReturn: {
    '0%': {
      'transform-origin': 'bottom left',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
    '100%': {
      'transform-origin': 'bottom left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
  },
  openDownRight: {
    '0%': {
      'transform-origin': 'bottom right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      'transform-origin': 'bottom right',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openDownRightReturn: {
    '0%': {
      'transform-origin': 'bottom right',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
    '100%': {
      'transform-origin': 'bottom right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
  },
  openUpLeft: {
    '0%': {
      'transform-origin': 'top left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      'transform-origin': 'top left',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openUpLeftReturn: {
    '0%': {
      'transform-origin': 'top left',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
    '100%': {
      'transform-origin': 'top left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
  },
  openUpRight: {
    '0%': {
      'transform-origin': 'top right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      'transform-origin': 'top right',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openUpRightReturn: {
    '0%': {
      'transform-origin': 'top right',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
    '100%': {
      'transform-origin': 'top right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
  },
  openDownLeftOut: {
    '0%': {
      opacity: '1',
      'transform-origin': 'bottom left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      opacity: '0',
      'transform-origin': 'bottom left',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openDownRightOut: {
    '0%': {
      opacity: '1',
      'transform-origin': 'bottom right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      opacity: '0',
      'transform-origin': 'bottom right',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openUpLeftOut: {
    '0%': {
      opacity: '1',
      'transform-origin': 'top left',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      opacity: '0',
      'transform-origin': 'top left',
      transform: 'rotate(110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  openUpRightOut: {
    '0%': {
      opacity: '1',
      'transform-origin': 'top right',
      transform: 'rotate(0deg)',
      '-webkit-animation-timing-function': 'ease-out',
      'animation-timing-function': 'ease-out',
    },
    '100%': {
      opacity: '0',
      'transform-origin': 'top right',
      transform: 'rotate(-110deg)',
      '-webkit-animation-timing-function': 'ease-in-out',
      'animation-timing-function': 'ease-in-out',
    },
  },
  tinDownIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(1, 1) translateY(900%)',
    },
    '50%, 70%, 90%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateY(0)',
    },
    '60%, 80%, 100%': {
      opacity: '1',
      transform: 'scale(1, 1) translateY(0)',
    },
  },
  tinDownOut: {
    '0%, 20%, 40%, 0%': {
      opacity: '1',
      transform: 'scale(1, 1) translateY(0)',
    },
    '10%, 30%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateY(0)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1, 1) translateY(900%)',
    },
  },
  tinLeftIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(1, 1) translateX(-900%)',
    },
    '50%, 70%, 90%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateX(0)',
    },
    '60%, 80%, 100%': {
      opacity: '1',
      transform: 'scale(1, 1) translateX(0)',
    },
  },
  tinLeftOut: {
    '0%, 20%, 40% 50%': {
      opacity: '1',
      transform: 'scale(1, 1) translateX(0)',
    },
    '10%, 30%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateX(0)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1, 1) translateX(-900%)',
    },
  },
  tinRightIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(1, 1) translateX(900%)',
    },
    '50%, 70%, 90%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateX(0)',
    },
    '60%, 80%, 100%': {
      opacity: '1',
      transform: 'scale(1, 1) translateX(0)',
    },
  },
  tinRightOut: {
    '0%, 20%, 40%,50%': {
      opacity: '1',
      transform: 'scale(1, 1) translateX(0)',
    },
    '10%, 30%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateX(0)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1, 1) translateX(900%)',
    },
  },
  tinUpIn: {
    '0%': {
      opacity: '0',
      transform: 'scale(1, 1) translateY(-900%)',
    },
    '50%, 70%, 90%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateY(0)',
    },
    '60%, 80%, 100%': {
      opacity: '1',
      transform: 'scale(1, 1) translateY(0)',
    },
  },
  tinUpOut: {
    '0%, 20%, 40%, 50%': {
      opacity: '1',
      transform: 'scale(1, 1) translateY(0)',
    },
    '10%, 30%': {
      opacity: '1',
      transform: 'scale(1.1, 1.1) translateY(0)',
    },
    '100%': {
      opacity: '0',
      transform: 'scale(1, 1) translateY(-900%)',
    },
  },
};
