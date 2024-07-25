function c(n) {
  let o = 0;
  const t = (e) => {
    o = e, n.innerHTML = `count is ${o}`;
  };
  n.addEventListener("click", () => t(o + 1)), t(0);
}
function r(n) {
  document.body.style.backgroundColor = n;
}
export {
  r as changeBgColor,
  c as setupCounter
};
