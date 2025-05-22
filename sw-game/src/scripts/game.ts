/**
 * QUOI : Gestionnaire de jeu pour le contrôle d'un joueur dans un environnement 2D
 * COMMENT : Utilise les événements clavier et requestAnimationFrame pour un déplacement fluide
 */
class Game {
    /** QUOI : Référence à l'élément DOM du joueur */
    private player: HTMLElement;
    /** QUOI : Coordonnée X du joueur */
    private playerX: number = 0;
    /** QUOI : Coordonnée Y du joueur */
    private playerY: number = 0;
    /** QUOI : Vitesse de déplacement du joueur */
    private speed: number = 5;
    /** QUOI : État des touches du clavier 
     *  COMMENT : Utilise un objet avec les touches comme clés et leur état comme valeurs
     */
    private keys: { [key: string]: boolean } = {};

    /**
     * QUOI : Initialise le jeu et configure les contrôles
     * COMMENT : 
     * 1. Récupère l'élément joueur du DOM
     * 2. Centre le joueur sur l'écran
     * 3. Configure les écouteurs d'événements clavier
     * 4. Démarre la boucle de jeu
     * @throws {Error} Si l'élément player est introuvable
     */
    constructor() {
        this.player = document.getElementById('player') as HTMLElement;
        if (!this.player) throw new Error("Element player non trouvé");
        
        // Position initiale au centre
        this.playerX = window.innerWidth / 2 - 25;
        this.playerY = window.innerHeight / 2 - 25;
        this.updatePlayerPosition();

        // Gestion des événements clavier
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
        window.addEventListener('keyup', this.handleKeyUp.bind(this));

        // Boucle de jeu
        this.gameLoop();
    }

    /**
     * QUOI : Enregistre l'appui sur une touche
     * COMMENT : Met à jour l'état de la touche dans l'objet keys
     * @param event - Événement de touche pressée
     */
    private handleKeyDown(event: KeyboardEvent): void {
        this.keys[event.key] = true;
    }

    /**
     * QUOI : Enregistre le relâchement d'une touche
     * COMMENT : Réinitialise l'état de la touche dans l'objet keys
     * @param event - Événement de touche relâchée
     */
    private handleKeyUp(event: KeyboardEvent): void {
        this.keys[event.key] = false;
    }

    /**
     * QUOI : Met à jour la position visuelle du joueur
     * COMMENT : 
     * 1. Applique les limites de l'écran aux coordonnées
     * 2. Met à jour les propriétés CSS de position
     */
    private updatePlayerPosition(): void {
        // Limites de l'écran
        this.playerX = Math.max(0, Math.min(window.innerWidth - 50, this.playerX));
        this.playerY = Math.max(0, Math.min(window.innerHeight - 50, this.playerY));

        this.player.style.left = `${this.playerX}px`;
        this.player.style.top = `${this.playerY}px`;
    }

    /**
     * QUOI : Gère la logique de déplacement du joueur
     * COMMENT : 
     * 1. Vérifie l'état des touches directionnelles
     * 2. Applique les déplacements selon la vitesse définie
     * 3. Met à jour la position
     * 4. Planifie la prochaine frame
     */
    private gameLoop(): void {
        // Déplacement avec les flèches directionnelles
        if (this.keys['ArrowLeft']) this.playerX -= this.speed;
        if (this.keys['ArrowRight']) this.playerX += this.speed;
        if (this.keys['ArrowUp']) this.playerY -= this.speed;
        if (this.keys['ArrowDown']) this.playerY += this.speed;

        this.updatePlayerPosition();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}

// Démarrage du jeu quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    new Game();
}); 