import {detect} from 'detect-browser';
import {startProgressAnimation, startFunctionAnimationOnVisibleObject} from './components/animations';
import {resetSVG, onSVG} from './components/svg';
import {skillClickListener} from './components/listeners';
import {showWarning} from './components/warnings';

const browser = detect();


window.addEventListener('load', () => {
  let circleProgressBars = document.querySelectorAll('.circle-progress-bar__front');
  let skills = document.querySelectorAll('.software-skills__skill');
  let skillsList = document.querySelector('.software-skills__list');

  if ( browser.name === 'chrome') {
    let allSVGpath = document.querySelectorAll('#svg circle, #svg rect, #svg line, #svg path, #svg ellipse, #svg polyline');

    resetSVG(allSVGpath);
    onSVG( allSVGpath );
  } else {
    showWarning();
  }

  skillClickListener(skills);

  startFunctionAnimationOnVisibleObject(skillsList, startProgressAnimation, circleProgressBars);
});
