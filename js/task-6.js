let input;
const numbers = [];
let total = 0;

 do {
   numbers.push(input = prompt(`Введите число`));
   
  if (Number.isInteger(Number(input))) {
    total += Number(input);
   
  } else {
    alert(`Было введено не число, попробуйте еще раз`);
  }

} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`)