export function toRna(dna: string): string {
  let rna: string = "";
  // Il faut récupérer chaque nucleotides de la séquence dna
  for(let char of dna){
    if (char in nucleotides){
        rna += nucleotides[char];
    } else {
        throw new Error('Invalid input DNA.');       
    }
}
return rna;
}

type Nucleotides = Record<string, string>;
const nucleotides: Nucleotides = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U",
}
