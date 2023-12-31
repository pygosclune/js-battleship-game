const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(shipLength, x, y) {
    const newShip = new Ship(shipLength);
    this.ships.push({ newShip, x, y });
    }

  receiveAttack(x, y) {
    let hit = false;
    for (const shipInfo of this.ships) {
      const { ship, x: shipX, y: shipY } = shipInfo;
      if (x === shipX && y === shipY) {
        ship.hit();
        hit = true;
      }
    }

    if (!hit) {
      this.missedAttacks.push({ x, y });
    }
  }

  allShipsSunk() {
    return this.ships.every(shipInfo => shipInfo.ship.isSunk);
  }
}

module.exports = Gameboard;
