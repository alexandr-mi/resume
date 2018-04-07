function changeHref( href ) {
  let origin = document.location.origin,
    pathname = document.location.pathname;

  let splitPathname = pathname.split('/');
  splitPathname[splitPathname.length -1] = href;

  let resultPathname = splitPathname.join('/').trim();

  return origin + resultPathname
}

function checkDevice() {
  if ( window.screen.availWidth < 1100) {
    document.location.origin;
    document.location.href = changeHref( "mobile.html" );
  }
}

export default checkDevice;



