const inputText = "In order for a permanent defect to be produced from initially perfect crystal lattice, the kinetic energy that it receives {\displaystyle T_{max}} T_{{max}} must be larger than the formation energy of a Frenkel pair. However, while the Frenkel pair formation energies in crystals are typically around 5–10 eV, the average threshold displacement energies are much higher, 20–50 eV.[1] The reason for this apparent discrepancy is that the defect formation is a complex multi-body collision process (a small collision cascade) where the atom that receives a recoil energy can also bounce back, or kick another atom back to its lattice site. Hence, even the minimum threshold displacement energy is usually clearly higher than the Frenkel pair formation energy."

console.log(inputText);


const inputArray = inputText.split(" ");

console.log(inputArray);

for (i = 0; i < inputArray.length; i++) {
  if (Math.random() < .1) {
    inputArray[i] = `<strike>${inputArray[i]}</strike>`
  } else {
    // inputArray[i] = "";
  }
}


console.log(inputArray);

const outputString = inputArray.join(" ");

console.log(outputString);

words = {
  "apple": {
    gender: female,
    article: "a",
    pos: "noun"
  }

  "kitchen":
}
