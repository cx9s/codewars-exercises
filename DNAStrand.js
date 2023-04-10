function DNAStrand(dna) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return [...dna].map((symbol) => pairs[symbol]).join("");
}

console.log(DNAStrand("ATTGC"));
