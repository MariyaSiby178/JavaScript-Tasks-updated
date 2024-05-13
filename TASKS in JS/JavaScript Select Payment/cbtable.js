let info = [];
let editText;
let obj = {};
function checkbox_Function() {
  window.location.href = "checkbox.html";
}

function searchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function getList() {
  editText = undefined;
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
  info = info.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  editText = undefined;
  console.log(info);

  for (i = 0; i < info.length; i++) {
    v += "<tr>";
    v += "<td>" + i + "</td>";
    v += "<td>" + info[i].name + "</td>";
    v += "<td>" + info[i].phone + "</td>";
    v += "<td>" + info[i].email + "</td>";
    v += "<td>" + info[i].dob + "</td>";
    v += "<td>" + info[i].slct1 + "</td>";
    v += "<td>" + info[i].slct2 + "</td>";
    v += "<td>" + info[i].check1 + "</td>";
    v +=
      '<td><button class="btn btn-danger me-2" onclick="Edit(' +
      info[i].id +
      ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
      info[i].id +
      ')">Delete</button></td>';
  }

  document.getElementById("displayArea").innerHTML = v;
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
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

function Edit(id) {
  editText = id;
  window.location.href = "checkbox.html?id=" + id;
}
