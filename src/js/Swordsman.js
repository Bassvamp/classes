import Character from "./Character.js"

export default class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
        super(name, type)

        this.attack = 40;
        this.defense = 10;
    }
}