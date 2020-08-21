let yearZp = 2160000;
let anton = document.getElementById("anton");
let antonD = document.getElementById("antond");
let pribavka = yearZp / ((365 * 24 * 60 * 60 * 10 * 3) / 4); // прирост в 0.1 секунды
let balans = 0;
let date;
let dateHt = document.getElementById("date");
let longtime;
let imgBook = {
  ques: "ques.webp",
  guiness: "guiness.webp",
  guinessprice: 140,
  doshik: "doshik.webp",
  doshikprice: 38,
  fuel: "fuel.webp",
  fuelprice: 45,
};
if (localStorage.getItem("date")) {
  date = localStorage.getItem("date");
  longtime = new Date() - new Date(date);
  balans = balans + (pribavka * longtime) / 100;
} else {
  localStorage.setItem("date", new Date());
  date = localStorage.getItem("date");
}
let timer = setInterval(function () {
  dateHt.innerHTML = `начиная с:  ${date.slice(8, 10)}  / ${date.slice(
    4,
    7
  )} / ${date.slice(11, 15)} ${date.slice(16, 18)}ч ${date.slice(19, 21)}м`;
  balans += pribavka;
  anton.innerHTML = balans.toFixed(2) + " ₽";
  antonD.innerHTML = (balans / 75).toFixed(2) + " $";
}, 100);
document.getElementById("restart").addEventListener("click", () => {
  date = new Date();
  localStorage.setItem("date", date);
  window.location.reload();
});
document.getElementById("corup").onclick = function () {
  document.location.href = "https://fbk.info/about/";
};
document.getElementById("namesel").addEventListener("change", (event) => {
  console.log(event.target.value);
  switch (event.target.value) {
    case "0":
      stuff.style.backgroundImage = `url("ques.webp")`;
      x.innerHTML = "";
      kol.innerHTML = "";
      break;
    case "1":
      showNalog("guiness");
      break;
    case "2":
      showNalog("doshik");
      break;
    case "3":
      showNalog("fuel");
      break;
  }
});
function showNalog(str) {
  x.innerHTML = "X";
  kol.innerHTML = `${((balans * 0.43) / imgBook[str + "price"]).toFixed(0)}`;
  stuff.style.backgroundImage = `url(${imgBook[str]})`;
}
