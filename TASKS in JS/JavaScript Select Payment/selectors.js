let info = [];
let editText;
let obj = {};
function onloader() {
  let v = "";
  let payment = ["Cash", "Card"];

  for (let i = 0; i < payment.length; i++) {
    v += "<option>" + payment[i] + "</option>";
  }
  document.getElementById("slct1").innerHTML = v;
  change();
}
function change() {
  let val = document.getElementById("slct1").value;
  console.log(val);
  let v = "";
  if (val == "Cash") {
    let cash = ["Rs", "Dollar"];

    for (let i = 0; i < cash.length; i++) {
      v += "<option>" + cash[i] + "</option>";
    }
    document.getElementById("slct2").innerHTML = v;
  } else {
    let card = ["Master", "Rupay"];

    for (let i = 0; i < card.length; i++) {
      v += "<option>" + card[i] + "</option>";
    }
    document.getElementById("slct2").innerHTML = v;
  }
}


let payment = ["Cash", "Card"];
let cash = ["Rs", "Dollar"];
let card = ["Master", "Rupay"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

payment.forEach(function addPayment(item) {
  console.log(item);
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function () {
  slct2.innerHTML = "<option></option>";
  if (this.value == "Cash") {
    addToslct2(cash);
  }
  if (this.value == "Card") {
    addToslct2(card);
  }
};

function addToSlct2(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
  });
}
