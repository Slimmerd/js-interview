/* throttle will call the function passed to it every time the delay ends 
   as long as the trigger for the function is still happening
 */
function throttle(cb, delay = 250) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    cb(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
