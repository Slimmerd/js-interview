   /*
   Debouncing works by delaying our function call by a set period of time.
   If nothing happens during that time then the function will run just like normal,
   but if something happens that causes the function to be called again during the delay then the delay will be restarted.
   */

function debounce(f, ms) {
  let isCooldown = false;

  return () => {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

function debounce2(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
