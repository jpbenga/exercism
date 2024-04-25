export type Color = {
  name: string;
  value: number;
}

export function decodedValue(colorArray: string[]): number{
  let value1: string | undefined = getColorValue(colorArray[0]);
  let value2: string | undefined = getColorValue(colorArray[1]);
  if(value1 && value2){
    let result = value1 + value2;
    return parseInt(result);
  } else {
    return -1
  }
}

export function getColorValue(inputColor: string): string | undefined{
  let matchColor: Color | undefined = COLORS.find(c => c.name.toLowerCase() === inputColor.toLowerCase());
  if (matchColor){
    return matchColor.value.toString();
  } else {
    return undefined;
  }
}

export const COLORS: Color[] = [
  {name: "Black", value: 0},
  {name: "Brown", value: 1},
  {name: "Red", value: 2},
  {name: "Orange", value: 3},
  {name: "Yellow", value: 4},
  {name: "Green", value: 5},
  {name: "Blue", value: 6},
  {name: "Violet", value: 7},
  {name: "Grey", value: 8},
  {name: "White", value: 9}
]