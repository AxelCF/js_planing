function giveDate(Date) {
  const newDay = Date.split("/");
  newDay.pop();
  const result = newDay.join("/");
  return result;
}

function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

const maDate1 = new Date();
const maDate2 = new Date();

maDate1.setDate(maDate1.getDate());
maDate2.setDate(maDate2.getDate());

let maDateDay = maDate1.getDay();

// giveDate(maDate1.toLocaleDateString("fr"));

// maDate1.setDate(maDate1.getDate() + 1);

let result1 = [];
let result2 = [];

function previousDays() {
  for (let i = maDateDay; i > 0; i--) {
    // result1.push(giveDate(maDate1.toLocaleDateString("fr")));
    result1.push(maDate1.toLocaleDateString("fr"));
    // console.log("jour d'avant", maDate1);
    // console.log("première fonction", i);
    maDate1.setDate(maDate1.getDate() - 1);
  }
  result1.shift();
  result1.sort();
  // console.log(maDateDay);
}

function nextDays() {
  for (let i = maDateDay; i <= 7; i++) {
    result2.push(maDate2.toLocaleDateString("fr"));
    // result2.push(giveDate(maDate2.toLocaleDateString("fr")));
    // console.log("jour d'après", maDate2);
    // console.log("deuxième fonction", i);
    maDate2.setDate(maDate2.getDate() + 1);
    console.log(result2);
  }
}

function getWeekDay() {
  previousDays();
  nextDays();
  let weekDate = result1.concat(result2);
  weekDate = removeDuplicates(weekDate);
  // console.log(weekDate);
  if (weekDate.length == 8) {
    weekDate.shift();
  }
  let dateDayMonthOnly = [];
  weekDate.forEach((element) => {
    dateDayMonthOnly.push(giveDate(element));
    return dateDayMonthOnly;
  });
  console.log(dateDayMonthOnly);
  getPlaning(dateDayMonthOnly);

  let i = 0;
  let jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  dateDayMonthOnly.forEach((date) => {
    document.getElementById("main").innerHTML += `
    <p>${jours[i] + " " + date}</p>
    </div>`;
    i++;
    console.log(i);
  });
}

getWeekDay();
