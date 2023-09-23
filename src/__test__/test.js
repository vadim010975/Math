const { Magician } = require('../Magician');
const { Daemon } = require('../Daemon');

const mag = new Magician('Oleg');
const daemon = new Daemon('Ivan');

test.each([
  [2, 65],
  [null, null],
])('test class Magician with s% distance to enemy', (distance, expected) => {
  mag.distanceToEnemy = distance;
  mag.stoned = true;
  mag.attack = 80;
  const result = mag.attack;
  expect(result).toBe(expected);
});

test('test getter stoned class Magician', () => {
  const result = mag.stoned;
  expect(result).toBe(true);
});

test('test class Daemon', () => {
  daemon.distanceToEnemy = 2;
  daemon.stoned = true;
  daemon.attack = 100;
  const result = daemon.attack;
  expect(result).toBe(85);
});
