const Potion = require("./Potion");
const Character = require("./Character");

class Enemy extends Character {
  constructor(name, weapon) {
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  // inherit Character constructor
  // Enemy.prototype = Object.create(Character.prototype);

  // Enemy.prototype.getHealth = function () {
  //   return `The ${this.name}'s health is now ${this.health}!`;
  // };

  // Enemy.prototype.isAlive = function () {
  //   if (this.health === 0) {
  //     return false;
  //   }
  //   return true;
  // };

  // Enemy.prototype.getAttackValue = function () {
  //   const min = this.strength - 5;
  //   const max = this.strength + 5;

  //   return Math.floor(Math.random() * (max - min) + min);
  // };

  // Enemy.prototype.reduceHealth = function (health) {
  //   this.health -= health;

  //   if (this.health < 0) {
  //     this.health = 0;
  //   }
  // };

  getDescription() {
    return `
  ${this.name} holding a ${this.weapon} has appeared!
  `;
  }
}

module.exports = Enemy;
