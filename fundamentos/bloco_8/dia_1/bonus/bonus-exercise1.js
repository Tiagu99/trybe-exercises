const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.floor((Math.random() * (dragon.strength - 15)) + 15);

const warriorDamage = (warrior) => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

const mageDamage = (mage) => {
  if (mage.mana > 15) return {
    damage:  Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
    mana: 15
  };
  return {
    damage: 'Não possui mana suficiente',
    mana: 0
  };
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callback) => {
    dragon.healthPoints -= callback(warrior);
    warrior.damage = callback(warrior);
  },
  mageTurn: (callback) => {
    dragon.healthPoints -= callback(mage).damage;
    mage.damage = callback(mage).damage;
    mage.mana -= callback(mage).mana;
  },
  dragonTurn: (callback) => {
    mage.healthPoints -= callback(dragon);
    warrior.healthPoints -= callback(dragon);
    dragon.damage = callback(dragon);

  },
  battleTurn: () => battleMembers
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(`Turno 1: `);
console.log(gameActions.battleTurn());

