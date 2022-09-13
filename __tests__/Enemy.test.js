const Enemy = require("../lib/Enemy.js");
const Potion = require("../lib/Potion.js");

jest.mock("../lib/Potion.js");

test("creates enemy", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.name).toBe("goblin");
  expect(enemy.weapon).toBe("sword");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});
