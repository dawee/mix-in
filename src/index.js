const empty = class extends Object {};

const mixin = (...parts) => {
  if (parts.length < 2) throw new Error('mixin should be called with 2 minimum args');

  return parts.reverse().reduce((base, behaviour) => !!base ? behaviour(base) : behaviour, null);
};

const compose = (...parts) => {
  if (parts.length < 2) throw new Error('compose should be called with 2 minimum args');

  return mixin(...parts, empty);
};

module.exports = {mixin, compose};
