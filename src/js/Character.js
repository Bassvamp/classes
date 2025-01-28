export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(
        "Введите имя не менее двух и не больее десяти символов"
      );
    } else {
      this.name = name;
    }

    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defense = undefined;
  }
}
