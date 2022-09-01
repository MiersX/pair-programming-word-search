const transpose = function(matrix) {

  let array = [];
  for (let i =  0; i < matrix[0].length; i++) {
    array.push([]);
  }


  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      array[col][row]  = matrix[row][col];
    }
  }
  return array;

};







const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''))
  const vertical = transpose(letters);
  const verticalJoin = vertical.map(el => el.join(''))

  for (const v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
    if(v.split("").reverse().join("").includes(word)) return true
  }

  for (const l of horizontalJoin) {
      if (l.includes(word)) return true
      if(l.split("").reverse().join("").includes(word)) return true
      //if (l.reverse().includes(word)) return true
  }
  return false;
}

console.log(wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'AAAY'))








// Pair-programmed with Simran Kalirai


module.exports = wordSearch