
function checkInOptions( options, optionsObj, optionsDef ) {
  return (
    !options
      ? optionsDef
      : options[optionsObj]
        ? options[optionsObj]
        : optionsDef
  )
}

function preloader( options ) {
  const html = document.querySelector('html');

  let background = checkInOptions(options, 'background', 'black'),
    spinnerColorFront = checkInOptions(options, 'spinnerColorFront', 'rgba(255, 255, 255, 1)'),
    spinnerColorBack = checkInOptions(options, 'spinnerColorBack', 'rgba(255, 255, 255, 0.2)'),
    spinnerWidth = checkInOptions(options, 'spinnerWidth', 50),
    spinnerHeight = checkInOptions(options, 'spinnerHeight', 50),
    spinnerBorderWidth = checkInOptions(options, 'spinnerBorderWidth', 2),

    preloader = document.createElement('div'),
    spinner = document.createElement('div'),
    spinnerTwist,
    i = 0;

  html.style.overflow = 'hidden';

  preloader.className = 'preloder';
  spinner.className = 'preloder__spinner';

  preloader.style.cssText = `
      position: fixed;
      z-index: 99999;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${ background };
      overflow-y: hidden;`;

  spinner.style.cssText = `
      z-index: 999999;
      width: ${spinnerWidth}px;
      height: ${spinnerHeight}px;
      position: absolute;
      top: calc(50% - ${spinnerHeight/2}px);
      left: calc(50% - ${spinnerWidth/2}px);
      border-radius: 50%;
      border-top: ${spinnerBorderWidth}px solid ${spinnerColorBack};
      border-right: ${spinnerBorderWidth}px solid ${spinnerColorBack};
      border-bottom: ${spinnerBorderWidth}px solid ${spinnerColorBack};
      border-left: ${spinnerBorderWidth}px solid ${spinnerColorFront};`;

  preloader.appendChild(spinner);

  html.insertBefore(preloader, html.children[0]);

  spinnerTwist = setInterval(() => {
    spinner.style.transform = `rotate(${i}deg)`;
    i+= 5;
  }, 10);




  window.addEventListener('load', () => {
    clearInterval(spinnerTwist);
    html.removeChild(preloader);
    html.style.overflow = 'auto';
  })
}

export default preloader
