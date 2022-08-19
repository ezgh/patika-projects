let name = prompt("Hello! Please enter your name.");

document.querySelector("#myName").innerHTML = name;

function showTime() {
  const date = new Date();

  let day = date.getDate();
  let currentMonth = date.getMonth();
  let currentDay = date.getDay();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  let currentDate = `${day} ${months[currentMonth]} ${days[currentDay]} ${hour}:${minute}:${seconds}`;

  document.querySelector("#myClock").innerHTML = currentDate;

  setTimeout(showTime, 1000);
}

showTime();
