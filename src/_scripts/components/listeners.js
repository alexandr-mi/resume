import {startProgressAnimation} from './animations'

function skillClickListener(skills) {
  let involves = document.querySelectorAll('.software-skills__involve');
  for (let skill of skills) {
    skill.addEventListener('click', (e) => {
      let involveList = e.currentTarget.querySelector('.software-skills__involve');
      let SVGsWithAnimationInThis = e.currentTarget.querySelectorAll('.line-progress-bar__container [data-progress]');
      if ( involveList ) {
        if ( involveList.classList.contains('hidden') ) {
          for (let involve of involves) {
            involve.classList.add('hidden');
          }
          involveList.classList.remove('hidden');
          startProgressAnimation(SVGsWithAnimationInThis, 'line');
        } else {
          for (let involve of involves) {
            involve.classList.add('hidden');
          }
        }
      }
    });
  }
}

export {skillClickListener}
