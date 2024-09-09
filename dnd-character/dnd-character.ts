export type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type AbilityScore = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
export type Strength = AbilityScore;
export type Dexterity = AbilityScore;
export type Constitution = AbilityScore;
export type Intelligence = AbilityScore;
export type Wisdom = AbilityScore;
export type Charisma = AbilityScore;

export interface Character {
  strength: Strength;
  dexterity: Dexterity;
  constitution: Constitution;
  intelligence: Intelligence;
  wisdom: Wisdom;
  charisma: Charisma;
  hitpoints: number;
}

export function rollingDice(): Dice{
    return Math.floor((Math.random() * 6) + 1) as Dice;
}
export class DnDCharacter {

  public static generateAbilityScore(): AbilityScore {
    let record: Dice[] = [rollingDice(), rollingDice(), rollingDice(), rollingDice()];
    record.sort((a,b) => a - b);
    const score: AbilityScore = record[1] + record[2] + record[3] as AbilityScore;
    return score; 
  }

  public static getModifierFor(constitutionValue: AbilityScore): number {
    return Math.floor((constitutionValue -10) / 2);
  }

  public static generateCharacter(): Character{
    const character: Character = {
      strength: this.generateAbilityScore(),
      dexterity: this.generateAbilityScore(),
      constitution: this.generateAbilityScore(),
      intelligence: this.generateAbilityScore(),
      wisdom: this.generateAbilityScore(),
      charisma: this.generateAbilityScore(),
      hitpoints: 0
    }
    character.hitpoints = 10 + this.getModifierFor(character.constitution);
    return character
  }

 
}
