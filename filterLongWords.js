/**
 * Queremos filtrar el siguiente texto, y quedarnos solo con las palabras que son más largas de 'n' carácteres
 *
 * @param {string} sentence Un texto cualquiera
 * @param {number} n El tamaño mínimo de la palabra a filtrar
 */

function filterLongWords(sentence, n) {
  //Solution here

  const myArray = sentence.split(" ");

  return myArray.filter((x) => x.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 3), [
  "quick",
  "brown",
  "jumps",
]);
