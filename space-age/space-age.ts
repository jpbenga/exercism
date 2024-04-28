export function age(planet: string, seconds: number): number {
    let oneYearInSeconds: number = getOneYearPlanet(planet);
    return parseFloat((seconds / oneYearInSeconds).toFixed(2));
}

// On créer une fonction qui permet d'obtenir en secondes ce que vaut une année sur une planète
export function getOneYearPlanet(planet: string): number{
    let days: number = planetTime[planet.toLowerCase()] * 365.25;
    let seconds: number = (31557600 * days) / 365.25;
    return seconds;
}

// Créer un record qui associe une planète avec son année par rapport à la terre
type Planet = Record<string, number>;

const planetTime: Planet = {
    "mercury" : 0.2408467,
    "venus" : 0.61519726,
    "earth" : 1.0,
    "mars" : 1.8808158,
    "jupiter" : 11.862615,
    "saturn" : 29.447498,
    "uranus" : 84.016846,
    "neptune" : 164.79132
}
