let yearZp = 2160000;
let anton = document.getElementById("anton");
let antonD = document.getElementById("antond");
let pribavka = yearZp / ((365*24*60*60*10 * 3) / 4)// прирост в 0.1 секунды
let balans = 0;
let date;
let dateHt = document.getElementById("date");
let longtime;
if (localStorage.getItem("date")) {
  date = localStorage.getItem("date");
  longtime =  new Date()- new Date(date) ;
  balans =balans+pribavka*longtime/100;
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
  let b = balans + "";
  let d = balans / 75 + "";
  let krasivo = b.slice(0, 2) + b.slice(2, 5) + " ₽";
  let krasivoD = d.slice(0, 2) + d.slice(2, 5) + " $";
  anton.innerHTML = krasivo;
  antonD.innerHTML = krasivoD;
}, 100);
