import {startProgressAnimation, startFunctionAnimationOnVisibleObject} from './components/animations';
import {skillClickListener} from './components/listeners';


window.onload = () => {
  let circleProgressBars = document.querySelectorAll('.circle-progress-bar__front');
  let skills = document.querySelectorAll('.software-skills__skill');
  let skillsList = document.querySelector('.software-skills__list');

  skillClickListener(skills);

  startFunctionAnimationOnVisibleObject(skillsList, startProgressAnimation, circleProgressBars)
};
