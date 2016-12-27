export function isElementFullyInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function isElementPartInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom >= 0 &&
    rect.right >= 0
  );
}

export function isElementCloseToViewport (el, offSet = {top: 0, left: 0, right: 0, bottom: 0}) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top - (offSet.top || 0) <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left - (offSet.left || 0) <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.bottom + (offSet.bottom || 0) >= 0 &&
    rect.right + (offSet.right || 0) >= 0
  );
}
