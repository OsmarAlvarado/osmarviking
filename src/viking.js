// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    Attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
        this.health -= theDamage
    }
}

const soldier1 = new Soldier(100, 400)
const Attack = soldier1.Attack(0)
const Damage = soldier1.receiveDamage(30)

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(theDamage) {
        this.health -= theDamage

        if (this.health > 0) {

            return `${this.name} has recived ${theDamage} points of damage`
        } else {
            return `${this.name} has dead in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }

}

const viking1 = new Viking('Osmar', 100, 400)
viking1.Attack()
viking1.receiveDamage()
viking1.battleCry()

// Saxon
class Saxon extends Soldier {

    receiveDamage(theDamage) {
        this.health -= theDamage
        if (this.health > 0) {

            return `un Saxon has recived ${theDamage} points of damage`
        } else {
            return `A Saxon has died in comba`
        }
    }
}

// War
class War {
    constructor() {

    }

    addViking() {

    }

    addSaxon() {

    }

    vikingAttack() {

    }

    saxonAttack() {

    }

    showstatus() {

    }

}
