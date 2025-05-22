import type { Player } from "./Player";

export class Game {
    public success: boolean = false;

    private score: number = 0;
    private isRunning: boolean = false;
    private gameElement: HTMLElement | null = null;
    
    /**
     * Commentaire qui sert à rien
     */
    initialize(): void {
        // Initialiser les propriétés du jeu
        this.score = 0;
        this.isRunning = true;
        
        // Créer l'élément du jeu dans le DOM
        this.gameElement = document.querySelector('#app');
        
        if (this.gameElement) {
            // Remplacer le contenu existant par l'interface du jeu
            this.gameElement.innerHTML = `
                <div class="game-container">
                    <h1>Star Wars Game</h1>
                    <div class="game-info">Score: <span id="score">0</span></div>
                    <div class="game-area"></div>
                    <div class="controls">
                        <button id="start-button">Start Game</button>
                        <button id="reset-button">Reset</button>
                    </div>
                </div>
            `;
            
            // Ajouter les écouteurs d'événements
            const startButton = document.querySelector('#start-button');
            if (startButton) {
                startButton.addEventListener('click', () => this.startGame());
            }
            
            const resetButton = document.querySelector('#reset-button');
            if (resetButton) {
                resetButton.addEventListener('click', () => this.resetGame());
            }
        }
        
        console.log('Game initialized successfully!');
    }
    
    private startGame(): void {
        console.log('Game started!');
        // Logique pour démarrer le jeu
    }
    
    private resetGame(): void {
        this.score = 0;
        const scoreElement = document.querySelector('#score');
        if (scoreElement) {
            scoreElement.textContent = '0';
        }
        console.log('Game reset!');
    }
}