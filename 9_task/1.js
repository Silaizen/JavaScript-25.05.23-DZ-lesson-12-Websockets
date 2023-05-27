let score = 0;

let answer1 = parseInt(
  prompt(
    "Яка найбільша планета Сонячної системи?\n1. Марс\n2. Юпітер\n3. Венера"
  )
);
if (answer1 === 2) {
  score += 2;
}

let answer2 = parseInt(
  prompt("Яка найбільша країна за площею?\n1. Канада\n2. Росія\n3. Китай")
);
if (answer2 === 2) {
  score += 2;
}

let answer3 = parseInt(
  prompt("Як називається столиця Японії?\n1. Токіо\n2. Кіото\n3. Осака")
);
if (answer3 === 1) {
  score += 2;
}

alert("Кількість набраних балів: " + score);
