const circleLength = parseFloat(prompt('Введіть довжину кола:'));
const squarePerimeter = parseFloat(prompt('Введіть периметр квадрата:'));

const circleRadius = (circleLength / (2 * Math.PI)).toFixed(2);
const squareSideLength = squarePerimeter / 4;

if ((circleRadius <= squareSideLength)) {
  alert(`Коло з радіусом ${circleRadius} поміститься у квадрат з довжиною сторони ${squareSideLength}.`);
} else {
  alert(`Коло з радіусом ${circleRadius} не поміститься у квадрат з довжиною сторони ${squareSideLength}.`);
}
