export class Player {
    private name: string;
    private health: number;
    private score: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.score = 0;
    }

    getName(): string {
        return this.name;
    }

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