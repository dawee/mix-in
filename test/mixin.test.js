const {mixin, compose} = require('../src');
const assert = require('assert');

const bark = Base => class extends Base {

  bark() {
    return 'woof !'
  }

};

const poop = Base => class extends Base {

  poop() {
    return 'done !'
  }

};

const meow = Base => class extends Base {

  meow() {
    return 'meow !'
  }

};

const hug = Base => class extends Base {

  hug() {
    return 'aaaw !';
  }

};

class Animal {}

describe('mixin', () => {

  it('should work with behaviours and a base class', () => {
    const Cat = mixin(meow, poop, hug, Animal);
    const cat = new Cat();

    assert(cat.meow());
    assert(cat.poop());
    assert(cat.hug());
    assert(cat instanceof Animal);
  });

  it('should not accept less than 2 args', () => {
    assert.throws(() => mixin());
    assert.throws(() => mixin(Animal));
  });

});

describe('compose', () => {

  it('should work with behaviours', () => {
    const Dog = compose(bark, poop, hug);
    const dog = new Dog();

    assert(dog.bark());
    assert(dog.poop());
    assert(dog.hug());
  });

  it('should not accept less than 2 args', () => {
    assert.throws(() => compose());
    assert.throws(() => compose(bark));
  });

});