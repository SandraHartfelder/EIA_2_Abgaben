class Insect {
    species: string;
    color: string;
    position: [number, number];

    constructor(species: string, color: string, position: [number, number]) {
        this.species = species;
        this.color = color;
        this.position = position;
    }

    draw(): void {
        // Zeichne das Fluginsekt basierend auf seiner Art, Farbe und Position
    }
}

export default Insect;