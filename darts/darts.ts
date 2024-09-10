type Zone = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Coordonees = {x: number, y: number};
type Point = 0 | 1 | 5 | 10;

interface Cercle {
  center: Coordonees;
  rayon: number;
}

class DartGame {
  private static readonly MIN_X: number = -10;
  private static readonly MAX_X: number = 10;
  private static readonly MIN_Y: number = -10;
  private static readonly MAX_Y: number = 10;

  private readonly outerCircle: Cercle = { center: {x: 0, y: 0}, rayon: 10 };
  private readonly middleCircle: Cercle = { center: {x: 0, y: 0}, rayon: 5 };
  private readonly innerCircle: Cercle = { center: {x: 0, y: 0}, rayon: 1 };

  throwDart(): Coordonees {
    const xCoor: number = Math.floor(Math.random() * (DartGame.MAX_X - DartGame.MIN_X + 1) + DartGame.MIN_X);
    const yCoor: number = Math.floor(Math.random() * (DartGame.MAX_Y - DartGame.MIN_Y + 1) + DartGame.MIN_Y);
    return {x: xCoor, y: yCoor};
  }

  private calculateDistance(point: Coordonees, center: Coordonees): number {
    return Math.sqrt((point.x - center.x)**2 + (point.y - center.y)**2);
  }

  getScore(coordonees: Coordonees): Point {
    const distance = this.calculateDistance(coordonees, this.outerCircle.center);
    
    if (distance <= this.innerCircle.rayon) return 10;
    if (distance <= this.middleCircle.rayon) return 5;
    if (distance <= this.outerCircle.rayon) return 1;
    return 0;
  }
}