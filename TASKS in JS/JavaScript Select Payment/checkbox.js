let info = [];
let editText;
let obj = {};
function onloader() {
  Edit();
  let v = "";
  let payment = ["Cash", "Card"];

  for (let i = 0; i < payment.length; i++) {
    v += "<option>" + payment[i] + "</option>";
  }
  document.getElementById("slct1").innerHTML = v;
  change();
}

// function keyUp() {
//   if (phone <= 10) {
//     document.getElementById("phone_err").innerHTML =
//       "The phone number is short";
//   }
// }

function showMessage() {
  const phoneInput = document.getElementById("phone");
  const message = document.getElementById("phone_err");

  const phoneNumber = phoneInput.value;
  if (phoneNumber.length === 0) {
    message.textContent = "";
  } else if (phoneNumber.length < 10) {
    message.textContent = "Enter a valid 10-digit phone number.";
    document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px red";
  } else if (phoneNumber.length > 10) {
    message.textContent = "The phone number is long";
    document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px red";
  } else {
    message.textContent = "";
    document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px green";

    // document.getElementById("phone").style.boxShadow = "";
  }
}

function emailshowMsg() {
  const emailInput = document.getElementById("email").value;

  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailInput
    );

  if (isValidEmail) {
    document.getElementById("email").style.boxShadow = "0px 0px 5px 1px green";
  } else {
    document.getElementById("email").style.boxShadow = "0px 0px 5px 1px red";
  }
}

function nameshowMsg() {
  const nameInput = document.getElementById("name").value;
  const onlyAlphabets = /^[A-Za-z]+$/.test(nameInput);
  if (onlyAlphabets) {
    document.getElementById("name").style.boxShadow = "0px 0px 5px 1px green";
  } else {
    document.getElementById("name").style.boxShadow = "0px 0px 5px 1px red";
  }
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

// function disableFunction() {
//   const payment = document.getElementById("payment");
//   const amount = document.getElementById("amount");

//   if (payment.value === "Card") {
//     amount.disabled = true;
//   } else {
//     amount.disabled = false;
//   }
// }

function myFunction() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var slct1 = document.getElementById("slct1").value;
  var slct2 = document.getElementById("slct2").value;
  var check1 = document.getElementById("check1").checked;
  let q =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let must = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (check1) {
    check1 = 1;
  } else {
    check1 = 0;
  }
  console.log(name);
  console.log(phone);
  console.log(email);
  console.log(dob);
  console.log(slct1);
  console.log(slct2);
  console.log(check1);

  if (name == "") {
    document.getElementById("name_err").innerHTML = "name required";
    document.getElementById("name").style.boxShadow = "0px 0px 5px 1px red";
    // swal("Oops", "Something went wrong!", "error");
  } else {
    document.getElementById("name_err").innerHTML = "";
    document.getElementById("name").style.boxShadow = "0px 0px 5px 1px green";
    // swal("Good job!", "you Data add successfully", "success");
  }

  if (dob == "") {
    document.getElementById("dob_err").innerHTML = "dob required";
    document.getElementById("dob").style.boxShadow = "0px 0px 5px 1px red";
    // swal("Oops", "Something went wrong!", "error");
  } else {
    document.getElementById("dob_err").innerHTML = "";
    document.getElementById("dob").style.boxShadow = "0px 0px 5px 1px green";
    // swal("Good job!", "you Data add successfully", "success");
  }

  if (email == "") {
    document.getElementById("email_err").innerHTML = "please enter your Email";
    // name.style.backgroundColor = "red";
    document.getElementById("email").style.boxShadow = "0px 0px 5px 1px red";
  } else if (!q.test(email)) {
    document.getElementById("email_err").innerHTML = "Your Email id not valid";
    document.getElementById("email").style.boxShadow = "0px 0px 5px 1px red";
    // swal("Oops", "Something went wrong!", "error");
  } else {
    document.getElementById("email_err").innerHTML = "";
    document.getElementById("email").style.boxShadow = "0px 0px 5px 1px green";
    // swal("Good job!", "you Data add successfully", "success");
  }
  if (phone == "") {
    document.getElementById("phone_err").innerHTML =
      "Mobile number is required";
    document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px red";
  } else if (!must.test(phone)) {
    document.getElementById("phone_err").innerHTML =
      "The mobile number is not valid ";
    // document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px red";
    // swal("Oops", "Something went wrong!", "error");
  } else {
    document.getElementById("phone_err").innerHTML = "";
    // document.getElementById("phone").style.boxShadow = "0px 0px 5px 1px green";
    // swal("Good job!", "you Data add successfully", "success");
  }

  // if ((name = "")) {
  //   name.style.backgroundColor = "red";
  // }

  if (
    name == "" ||
    phone == "" ||
    email == "" ||
    dob == "" ||
    slct1 == "" ||
    slct2 == ""
  ) {
    return false;
  }

  if (!q.test(email)) {
    return false;
  }

  obj["name"] = name;
  obj["phone"] = phone;
  obj["dob"] = dob;
  obj["email"] = email;
  obj["slct1"] = slct1;
  obj["slct2"] = slct2;
  obj["check1"] = check1;
  const dateOfBirth = new Date(obj.dob);
  const formatteddob = dateOfBirth.toLocaleDateString("en-GB");
  obj["dob"] = formatteddob;
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
        window.location.href = "cbtable.html";
        // getList();
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
        window.location.href = "cbtable.html";
        // getList();
        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("email").value = "";
  document.getElementById("slct1").value = "";
  document.getElementById("slct2").value = "";
  document.getElementById("check1").value = "";
  console.log(obj);
}

// function insertTable() {
//   var name = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var dob = document.getElementById("dob").value;
//   var dob = document.getElementById("dob").value;
//   var dob = document.getElementById("dob").value;
//   var dob = document.getElementById("dob").value;
//   var gender = document.getElementById("gender").value;

//   let details = { name, phone, dob, gender };
//   console.log(details);

//   addTable();
// }

function Edit() {
  //
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  editText = id;
  if (id) {
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
        document.getElementById("email").value = info.email;
        const dateOfBirth = new Date(info.dob);
        const formatteddob = dateOfBirth.toLocaleDateString("en-CA");
        document.getElementById("dob").value = formatteddob;
        document.getElementById("slct1").value = info.slct1;
        document.getElementById("slct2").value = info.slct2;
        document.getElementById("check1").checked = info.check1;

        console.log(`Title of our response :  ${string.name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}

// console.log(obj);
