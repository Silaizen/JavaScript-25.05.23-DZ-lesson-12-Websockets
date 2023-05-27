const dateInput = prompt(
  "Введіть дату (день, місяць, рік) у форматі ДД.ММ.РРР:"
);

const parsedDate = parseInt(dateInput.replace(/\./g, ""), 10);

const [day, month, year] = dateInput
  .split(".")
  .map((part) => parseInt(part, 10));

let daysInMonth;

if (month === 2) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth = 29;
  } else {
    daysInMonth = 28;
  }
} else if ([4, 6, 9, 11].includes(month)) {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
}

let nextDay, nextMonth, nextYear;

if (day === daysInMonth) {
  if (month === 12) {
    nextDay = 1;
    nextMonth = 1;
    nextYear = year + 1;
  } else {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
  }
} else {
  nextDay = day + 1;
  nextMonth = month;
  nextYear = year;
}

const formattedNextDay = String(nextDay).padStart(2, "0");
const formattedNextMonth = String(nextMonth).padStart(2, "0");

alert(`Наступна дата: ${formattedNextDay}.${formattedNextMonth}.${nextYear}`);
