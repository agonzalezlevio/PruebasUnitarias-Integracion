import { EventEmitter } from '@angular/core';

// Class
export class Jugador2 {

    public vida: number;
    public vidaCambia = new EventEmitter<number>();

    constructor() {
        this.vida = 100;
    }


    public recibeDamage( damage: number): void {
        if (damage >= this.vida) {
            this.vida = 0;
        } else {
            this.vida = this.vida - damage;
        }
        this.vidaCambia.emit(this.vida);
    }
}