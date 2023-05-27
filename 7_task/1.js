let purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));

let discount = (purchaseAmount >= 200 && purchaseAmount < 300) ? 3 :
              (purchaseAmount >= 300 && purchaseAmount < 500) ? 5 :
              (purchaseAmount >= 500) ? 7 : 0;

let totalAmount = purchaseAmount - (purchaseAmount * (discount / 100));

alert(`Сума до сплати зі знижкою: ${totalAmount.toFixed(2)}\nЗнижка: ${discount}%`);
