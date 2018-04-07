function resetSVG( progressBars ) {
  for (let path of progressBars) {
    let fullLengthSVGPath = path.getTotalLength();
    path.style.strokeDasharray = fullLengthSVGPath;
    path.style.strokeDashoffset = fullLengthSVGPath;
  }
}

function onSVG( progressBars ) {
  for (let path of progressBars) {
    let progress = path.dataset.progress;
    let fullLengthSVGPath = path.getTotalLength();
    path.style.transition = 'stroke-dashoffset 2.5s';
    path.style.strokeDashoffset = 0;

  }
}

export {resetSVG, onSVG}
