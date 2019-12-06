

// Class
export class Jugador {

    public vida: number;

    constructor() {
        this.vida = 100;
    }


    public recibeDamage( damage: number): number {
        if (damage >= this.vida) {
            this.vida = 0;
        } else {
            this.vida = this.vida - damage;
        }
        return this.vida;
    }
}
