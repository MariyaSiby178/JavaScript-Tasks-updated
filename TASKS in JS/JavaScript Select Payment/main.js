let info = [];
let editText;
let obj = {};
// function disableFunction() {
//   if (payment == "card") {
//     document.getElementById("amount").disabled = true;
//   }
// }

// function disableFunction() {
//   var result = document.getElementById("payment").value;
//   if (payment == "card") {
//     document.getElementById("amount").disabled = true;
//   } else {
//     document.getElementById("amount").disabled = false;
//   }
// }
function disableFunction() {
  const payment = document.getElementById("payment");
  const amount = document.getElementById("amount");

  if (payment.value === "Card") {
    amount.disabled = true;
  } else {
    amount.disabled = false;
  }
}

// function disableFunction() {
//   var amount = document.getElementById("amount").value;
//   if (payment.value == "Card") {
//     amount.removeAttribute("disabled");
//   } else {
//     amount.setAttribute("disabled", "disabled");
//   }
// }

function myFunction() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var payment = document.getElementById("payment").value;
  var amount = document.getElementById("amount").value;

  console.log(name);
  console.log(phone);
  console.log(payment);
  console.log(amount);

  if (name == "") {
    document.getElementById("name_err").innerHTML = "name required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }

  if (phone == "") {
    document.getElementById("phone_err").innerHTML = "phone required";
  } else {
    document.getElementById("phone_err").innerHTML = "";
  }

  if (payment == "") {
    document.getElementById("payment_err").innerHTML = "payment required";
  } else {
    document.getElementById("payment_err").innerHTML = "";
  }

  if (amount == "") {
    document.getElementById("amount_err").innerHTML = "number required";
  } else {
    document.getElementById("amount_err").innerHTML = "";
  }

  if (name == "" || phone == "" || phone == "" || amount == "") {
    return false;
  }

  obj["name"] = name;
  obj["phone"] = phone;
  obj["phone"] = phone;
  obj["amount"] = amount;

  if (editText != undefined) {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

    fetch(url + "/" + editText, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("amount").value = "";
}

function getList() {
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      info = string;
      addTable();
      console.log(`Title of our response :  ${info.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}

function onLoader() {
  getList();
}

function addTable() {
  var v = "";
  editText = undefined;
  console.log(info);
  for (i = 0; i < info.length; i++) {
    v += "<tr>";
    v += "<td>" + info[i].name + "</td>";
    v += "<td>" + info[i].phone + "</td>";
    v += "<td>" + info[i].phone + "</td>";
    v += "<td>" + info[i].amount + "</td>";
    v +=
      '<td><button class="btn btn-danger" onclick="Edit(' +
      info[i].id +
      ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
      info[i].id +
      ')">Delete</button></td>';
  }

  document.getElementById("displayArea").innerHTML = v;
}

function insertTable() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var phone = document.getElementById("phone").value;
  var amount = document.getElementById("amount").value;

  let details = { name, phone, phone, amount };
  console.log(details);

  addTable();
}

function Delete(id) {
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";
  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      getList();
      console.log(`Title of our response :  ${string.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}

function Edit(id) {
  editText = id;
  let url = "https://64cc86e02eafdcdc8519ed7a.mockapi.io/employee/teacher";

  fetch(url + "/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      console.log(string);
      info = string;
      document.getElementById("name").value = info.name;
      document.getElementById("phone").value = info.phone;
      document.getElementById("phone").value = info.phone;
      document.getElementById("amount").value = info.amount;

      console.log(`Title of our response :  ${string.name}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
