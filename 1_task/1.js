let age = parseInt(prompt("Введіть ваш вік:"));
let message;

if (age >= 0 && age <= 12) {
  message = "Ви дитина.";
} else if (age > 12 && age <= 18) {
  message = "Ви підліток.";
} else if (age > 18 && age <= 60) {
  message = "Ви дорослий.";
} else if (age > 60) {
  message = "Ви пенсіонер.";
} else {
  message = "Некоректний вік.";
}

alert(message);
