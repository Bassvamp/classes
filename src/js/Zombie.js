import Character from "./Character.js";

export default class Zombie extends Character {
    constructor(name, type = 'Zombie') {
        super(name, type)

        this.attack = 40;
        this.defense = 10;
    }
}

