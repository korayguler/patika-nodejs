const parameters = process.argv.slice(2);
function calculateCircleArea(r) {
  return r
    ? `Yarıçapı: ${r} olan dairenin alanı: ${(Math.PI * r ** 2).toFixed(2)}`
    : 'Lütfen parametre giriniz!!';
}

console.log(calculateCircleArea(parameters[0]));
