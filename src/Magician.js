class Magician {
  #stoned;

  #attack;

  constructor(name) {
    this.name = name;
    this.distanceToEnemy = null;
    this.#stoned = false;
    this.#attack = 100;
  }

  get stoned() {
    return this.#stoned;
  }

  set stoned(value) {
    this.#stoned = value;
  }

  get attack() {
    if (this.distanceToEnemy) {
      return this.#attack - ((this.distanceToEnemy - 1) * 10) - Math.log2(this.distanceToEnemy) * 5;
    }
    return null;
  }

  set attack(value) {
    this.#attack = value;
  }
}

module.exports = {
  Magician,
};
