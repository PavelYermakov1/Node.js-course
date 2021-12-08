const avg = (...args) =>
  args.length ? args.reduce((acc, cur) => acc + cur) / args.length : 0;

function avg(...args) {
  return args.length ? args.reduce((acc, cur) => acc + cur) / args.length : 0;
}

const avg = function (...args) {
  return args.length ? args.reduce((acc, cur) => acc + cur) / args.length : 0;
};
