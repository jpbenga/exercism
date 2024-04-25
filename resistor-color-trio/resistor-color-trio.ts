export function decodedResistorValue(colors: string[]) {
  let digit: number[] = [];
  for (let color of colors){
      console.log(color)
    //je parcours le tableau COLORS pour voir si une couleur correspond
    let colorToFind : string | undefined = COLORS.find(c => color === c);
    // si une couleur correspond je push son index dans le tableau digit.
    if (colorToFind){
      console.log(colorToFind)
      digit.push(COLORS.indexOf(colorToFind));
    } else {
      return -1
    }
  }
  console.log(digit)
}

export function digitToString(digit: number[]){
  // On récupère le dernier numéro
  let lastDigit: number = digit[digit.length - 1];
  // On créer une string vide qu'on va remplir des zéros, leur nombre correspondra à lastDigit
  let zeroString: number[] = [];
  for (let i = 0; i < lastDigit; i++){
      zeroString.push(0);
  }
  return zeroString.toString();
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
 
digitToString([1,2,3,]);