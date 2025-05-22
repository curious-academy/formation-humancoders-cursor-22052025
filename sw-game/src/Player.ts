import type { Game } from "./game";

export class Player {
    private name: string;
    private health: number;
    private score: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.score = 0;
    }

    /**
     * QUOI : Récupère le nom du joueur
     * COMMENT : Retourne le nom du joueur
     * @returns {string} Le nom du joueur
     */
    getName(): string {
        return this.name;
    }

    private games: Game[] = [];


    
    getGamesSucces(): number {
        return this.games.filter(game => game.success).length;
    }

    // retourne la liste des parties échouées
    getGamesFailed(): Game[] {
        return this.games.filter(game => !game.success);
    }

    // getGamesFailed(): number {
    //     return this.games.filter(game => game.failed).length;
    // }

    getHealth(): number {
        return this.health;
    }

    getScore(): number {
        return this.score;
    }

    takeDamage(amount: number): void {
        this.health = Math.max(0, this.health - amount);
    }

    addScore(points: number): void {
        this.score += points;
    }

    isAlive(): boolean {
        return this.health > 0;
    }
} 