let yearZp = 2160000;
let anton = document.getElementById("anton");
let antonD = document.getElementById("antond");
let pribavka = yearZp / ((365 * 24 * 60 * 60 * 10 * 3) / 4); // прирост в 0.1 секунды
let balans = 0;
let date;
let dateHt = document.getElementById("date");
let longtime;
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

// курс доллара
// Получаем текущие курсы валют в rss-формате с сайта www.cbr.ru

let url = "https://www.cbr-xml-daily.ru/daily_json.js";
function getJSON(url, qs_params) {
  function buildQueryString(params) {
    return Object.entries(params)
      .map((d) => `${d[0]}=${d[1]}`)
      .join("&");
  }

  return new Promise((resolve, reject) => {
    const qs = qs_params ? "?" + buildQueryString(qs_params) : "";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}${qs}`);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        resolve(xhr.responseText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
console.log(getJSON(url).then());
