const { Magician } = require('./Magician');

class Daemon extends Magician {
  constructor(name) {
    super(name);
    this.attack = 80;
  }
}

module.exports = {
  Daemon,
};
