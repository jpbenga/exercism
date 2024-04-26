export function decodedResistorValue(colors: string[]) {
    // On ignore les autres couleurs si le tableau contient plus de 3 couleurs
    while (colors.length > 3){
        colors.splice(colors.length - 1, 1)
    }
  let digit: number[] | number = arrayDigit(colors);
  let digitString: string = digitToString(digit);
  console.log(convertDigit(digitString));
  return convertDigit(digitString);
}

export function arrayDigit(colors: string[]): number[] {
    let digit: number[] = [];
    for (let color of colors) {
        // Parcourir le tableau COLORS pour trouver une correspondance de couleur
        let colorIndex: number = COLORS.indexOf(color);
        // Vérifier si la couleur a été trouvée
        if (colorIndex !== -1) {
            digit.push(colorIndex);
        } else {
            // Retourner -1 si la couleur n'a pas été trouvée
            return [-1];
        }
    }
    // Retourner le tableau digit après avoir parcouru tous les éléments
    return digit;
}

export function digitToString(digit: number[]): string{
  // On récupère le dernier numéro
  let lastDigit: number = digit[digit.length - 1];
  // On créer une string vide qu'on va remplir des zéros, leur nombre correspondra à lastDigit
  let zeroString: string = ""
  for (let i = 0; i < lastDigit; i++){
      zeroString += "0";
  }
  // On retourne la concaténation des 2 premiers éléments du tableau et des 0 qui suivent
  let result: string = `${digit[0].toString()}${digit[1].toString()}${zeroString}`;
  return result;
}

export function convertDigit(digit: string): string{
    let result: string = "";
    let numberZero: number = 0;
    // On va compter le nombre zeros présents
    for (let i = 0; i < digit.length; i++){
        if (digit[i] === "0"){
            numberZero++;
        }
    }
    // On va gérer le texte de sortie en fonction de l'unité
    if (numberZero >= 9) {
        let digitToNumber: number = parseInt(digit) / 1000000000;
        result = `${digitToNumber.toString()} gigaohms`;
    } else if (numberZero >= 6) {
        let digitToNumber: number = parseInt(digit) / 1000000;
        result = `${digitToNumber.toString()} megaohms`;
    } else if (numberZero >= 3) {
        let digitToNumber: number = parseInt(digit) / 1000;
        result = `${digitToNumber.toString()} kiloohms`;
    } else {
         while (digit.charAt(0) === "0") {
            digit = digit.substring(1);
        }
        digit === ""? result = "0 ohms" :result = `${digit} ohms`;
    }
    return result;
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  'violet',
  "grey",
  "white"
];
