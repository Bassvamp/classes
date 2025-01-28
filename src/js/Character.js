export default class Character {
  constructor(name, type, health = 100, level = 1, attack, defense) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Введите имя не менее двух и не больее десяти символов"
      );
    } else {
      this.name = name;
    }

    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defense = defense;
  }
}
