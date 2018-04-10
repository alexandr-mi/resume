function startProgressAnimation(progressBars, type) {
  for (let path of progressBars) {
    let progress = path.dataset.progress;
    let fullLengthSVGPath = type === 'circle' ? 235.2 : 300;

    path.style.strokeDashoffset = fullLengthSVGPath/100*(100-progress);
  }
}

function startFunctionAnimationOnVisibleObject( object, functionAnimation, param, visiblePercentage ) {
  const checkVisibleThisContainer = () => {
    const winHeight = window.innerHeight;
    const winScrollY = window.scrollY;

    const _object = object;
    const containerOffsetTop = _object.offsetTop;
    const containerHeight = _object.getBoundingClientRect().height;

    const offsetTopIncludeStartProgressAnimation = winHeight + winScrollY - containerHeight*(visiblePercentage || 0.5);

    const resultCheckVisibleThisContainer = offsetTopIncludeStartProgressAnimation >= containerOffsetTop;

    if (resultCheckVisibleThisContainer) {
      functionAnimation(param, 'circle');
      window.removeEventListener('scroll', checkVisibleThisContainer)
    }
  };

  window.addEventListener('scroll', checkVisibleThisContainer );

  checkVisibleThisContainer();
}

export {startProgressAnimation, startFunctionAnimationOnVisibleObject}
